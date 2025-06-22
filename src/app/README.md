# /app

Thư mục entry point chính của ứng dụng.

## Cấu trúc con:
- `App.tsx`: Root component, bọc tất cả provider & router.
- `Router.tsx`: Định nghĩa các route chính của ứng dụng.
- `providers/`: Chứa các context provider hoặc wrapper global như:
    - `ReactQueryProvider.tsx`
    - `ThemeProvider.tsx`
    - `SuspenseBoundary.tsx`

> Chỉ nên chứa logic toàn app (không domain cụ thể).
