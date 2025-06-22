# /features

Tổ chức theo domain/tính năng (feature-based structure).

## Quy ước:
Mỗi domain nằm trong thư mục con (VD: `auth`, `dashboard`, `settings`) và tự quản lý logic của nó.

### Cấu trúc bên trong mỗi domain:
- `components/`: UI components riêng cho domain.
- `hooks/`: Hook liên quan domain (thường wrap useQuery/useMutation).
- `pages/`: Page component để dùng trong route.
- `services/` hoặc `api/`: Gọi API domain, tách riêng mutation/query logic.
- `types.ts`: Interface riêng cho domain.

> Không được dùng trực tiếp từ feature này sang feature khác. Dùng `shared/` để tái sử dụng.
