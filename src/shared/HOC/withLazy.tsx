import {
    ComponentType,
    LazyExoticComponent,
    Suspense,
    ReactNode, lazy, ComponentProps,
} from 'react';
import ErrorBoundaryComponent from "../components/feedback/ErrorBoundaryComponent";

// Type cho tùy chọn
type WithLazyOptions = {
    fallback?: ReactNode;
    retryCount?: number; // số lần thử lại khi import thất bại
};

// Hàm tạo lazy component với retry
function lazyWithRetry<T extends ComponentType<any>>(
    importFn: () => Promise<{ default: T }>, // nhận vào function import component
    retryCount = 3
): LazyExoticComponent<T> {
    return lazy(() => {
        // gán số lần retry được truyền vào
        let retries = retryCount;

        const attempt = (): Promise<{ default: T }> =>
            importFn().catch((err) => {
                if (retries <= 0) throw err; // kiểm tra hết số lần retry thì báo lỗi
                retries--;                   // trừ số lần retry qua mỗi lần
                return new Promise((resolve) =>
                    setTimeout(() => resolve(attempt()), 500) // retry mỗi lần cách nhau 500ms
                );
            });

        return attempt();
    });
}

// Hàm withLazy chính
export function withLazy<T extends ComponentType<any>>(
    importFn: () => Promise<{ default: T }>,
    options?: WithLazyOptions
) {
    // gọi lazy retry truyền vào import component và số lần retry
    const LazyComponent = lazyWithRetry(importFn, options?.retryCount ?? 3);

    // bọc lại trong Suspense để hiển thị fallback trong lúc chờ
    const WrapperComponent = (props: ComponentProps<T>) => {
        return (
            // không truyền fallback sẽ tự lấy loading hiển thị
            <ErrorBoundaryComponent>
                <Suspense fallback={options?.fallback ?? <div>Loading...</div>}>
                    <LazyComponent {...props} />
                </Suspense>
            </ErrorBoundaryComponent>

        );
    };

    // ✅ Gắn preload vào component trả về
    (WrapperComponent as any).preload = importFn;

    return WrapperComponent as ComponentType<ComponentProps<T>> & {
        preload: () => Promise<void>;
    };
}
