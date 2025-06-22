import { useRouteError } from 'react-router';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
      <h1>🚨 Oops! Có lỗi xảy ra.</h1>
      <p>{error?.statusText || error?.message}</p>
      <button onClick={() => window.location.href = '/'} style={{ marginTop: '1rem' }}>
        Quay về trang chủ
      </button>
    </div>
  );
}
