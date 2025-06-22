# /infra

Hạ tầng kỹ thuật - xử lý tầng nền không liên quan trực tiếp đến UI.

## Thư mục con:
- `api/`: Axios setup, interceptors,...
- `query/`: Cấu hình React Query (`queryClient`, `defaultOptions`)
- `workers/`: Web Worker script (xử lý nặng tách khỏi main thread)
- `i18n/`: Đa ngôn ngữ (nếu có)

> Đây là tầng "infrastructure", không chứa logic domain cụ thể.
