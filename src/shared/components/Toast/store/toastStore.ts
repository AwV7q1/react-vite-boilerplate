import { create } from 'zustand';

type ToastType = 'success' | 'error' | 'info';
export type ToastPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'center';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
    position: ToastPosition;
    duration: number; // ms
}

interface ToastStore {
    toasts: Toast[];
    showToast: (
        message: string,
        type?: ToastType,
        position?: ToastPosition,
        duration?: number
    ) => void;
    removeToast: (id: number) => void;
}

const MAX_TOAST = 5;

export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    showToast: (
        message,
        type = 'info',
        position = 'top-right',
        duration = 3000
    ) =>
        set((state) => {
            const id = Date.now();
            let newToasts = [...state.toasts, { id, message, type, position, duration }];
            if (newToasts.length > MAX_TOAST) {
                newToasts = newToasts.slice(newToasts.length - MAX_TOAST);
            }
            return { toasts: newToasts };
        }),
    removeToast: (id) =>
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id),
        })),
}));