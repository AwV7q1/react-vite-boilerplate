## Hướng dẫn sử dụng HOC

### import component với HOC
- import withLazy và bọc link import component của bạn vào withLazy để sử dụng
```jsx
// khai báo component sử dụng lazy
const LazyCard = withLazy(() => import('./Card'), {
fallback: <div>Đang tải thẻ...</div>, // truyền component loading
retryCount: 2 // số lượt retry
});
```

### Sử dụng component đã import lazy
- Sử dụng trong trường hợp dự đoán người dùng chuyển trang dùng preload để tải trước nội dung
```jsx
// Gọi preload khi hover chuột
<button onMouseEnter={() => LazyCard.preload()}>
Tới Card
</button>

// Dùng trong JSX
<LazyCard someProp="abc" />
```



### Kiểm tra kết quả
Kiểm tra Suspense fallback:
- import fakeDelay và bọc nó vào component cần import\
- thêm thời gian delay
 
Kiểm tra lazy:
- Tạo 2 màn hình A và B
- component được lazy sẽ import vào màn hình B
- Bật dev tool ở browser, chuyển sang tab Network, chọn filter JS, đánh dấu vào disable cache, kiểm tra các file js được tải xuống.
- Từ màn hình A điều hướng sáng màn hình B, lúc này component lazy sẽ tải xuống và fallback loading, sau 2 giây sẽ hiển thị
- Kết quả đúng:
  - khi vào màn hình A, component lazy không được tải xuống
  - Chỉ khi vào màn hình B, component lazy mới được tải xuống

Kiểm tra handle error component:
- import component brokenPage vào lazy
- error của component sẽ hiện lên ở vị trí import compent trên màn hình mà không gây báo lỗi cả màn hình
```jsx
const LazyCard = withLazy(() => fakeDelay(
  (
    import('./Card'), 
    {
      fallback: <div>Đang tải thẻ...</div>, // truyền component loading
      retryCount: 2 // số lượt retry
    }
  ),
  2000 // delay thời gian load 2000
))
```
