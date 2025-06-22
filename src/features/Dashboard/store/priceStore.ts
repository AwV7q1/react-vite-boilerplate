import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PriceState = {
    price5minAgo: Record<string, string>; // symbol → price
    setPrice5minAgo: (symbol: string, price: string) => void;
    clearAll: () => void;
};

export const usePriceStore = create<PriceState>()(
    persist(
        (set) => ({

            price5minAgo: {},
            setPrice5minAgo: (symbol, price) =>
                set((state) => ({
                    price5minAgo: {
                        ...state.price5minAgo,
                        [symbol]: price,
                    },
                })),
            clearAll: () => set({ price5minAgo: {} }),
        }),
        {
            name: 'price-store', // key lưu trong localStorage
        }
    )
);
