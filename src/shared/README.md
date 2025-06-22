# /shared

Chứa tất cả các thành phần dùng chung giữa các feature trong app.

## Thư mục con:
- `components/`: UI components tái sử dụng.
    - `ui/`: Button, Modal, Spinner, Skeleton...
    - `layout/`: Header, Footer, Sidebar...
    - `feedback/`: Toast, ErrorFallback,...
    - `loading/`: AppLoadingOverlay, RouteLoading, ComponentSkeleton,...
- `hooks/`: Các hook tiện ích dùng chung (debounce, network, focus...)
- `store/`: Zustand store toàn cục (auth, loading, user,...)
- `utils/`: Hàm tiện ích nhỏ (formatDate, retryWithJitter,...)
- `constants/`: Hằng số chung (API endpoint, theme...)
- `types/`: Các kiểu dùng toàn app (global.d.ts,...)
- `HOC/`: Higher-order components (ví dụ: withSuspense)

> Tuyệt đối không viết logic cụ thể domain ở đây!
