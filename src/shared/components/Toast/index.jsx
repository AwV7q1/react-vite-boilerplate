import {useEffect, useState} from 'react';
import { useToastStore} from "./store/toastStore";
import './toast.scss'

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'center',
];

export const Toast = () => {
  const { toasts, removeToast } = useToastStore();
  const [visibleToasts, setVisibleToasts] = useState([]);

  useEffect(() => {
    const timers = {};

    toasts.forEach((toast) => {
      if (!visibleToasts.includes(toast.id)) {
        setVisibleToasts((prev) => [...prev, toast.id]);
        timers[toast.id] = setTimeout(() => {
          setVisibleToasts((prev) => prev.filter((id) => id !== toast.id));
          setTimeout(() => removeToast(toast.id), 300);
        }, toast.duration);
      }
    });

    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
  }, [toasts]);

  return (
      <>
        {positions.map((pos) => {
          const filteredToasts = toasts.filter((t) => (t.position ?? 'top-right') === pos);
          return (
              <div key={pos} className={`toast-container ${pos}`}>
                {filteredToasts.map((toast) => {
                  const isVisible = visibleToasts.includes(toast.id);
                  return (
                      <div
                          key={toast.id}
                          className={`toast toast-${toast.type} ${isVisible ? 'show' : 'hide'}`}
                      >
                        <span className="toast-icon">{getIcon(toast.type)}</span>
                        <span className="toast-message">{toast.message}</span>
                        <button
                            className="toast-close"
                            onClick={() => {
                              setVisibleToasts((prev) => prev.filter((id) => id !== toast.id));
                              setTimeout(() => removeToast(toast.id), 300);
                            }}
                        >
                          ×
                        </button>
                      </div>
                  );
                })}
              </div>
          );
        })}
      </>
  );
};

function getIcon(type) {
  switch (type) {
    case 'success':
      return '✅';
    case 'error':
      return '❌';
    case 'info':
      return 'ℹ️';
    default:
      return '';
  }
}