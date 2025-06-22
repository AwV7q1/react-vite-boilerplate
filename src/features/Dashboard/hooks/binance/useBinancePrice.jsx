import {useEffect, useState} from 'react';
import {usePriceStore} from "@features/Dashboard/store/priceStore.js";

const symbols = ['btcusdt', 'ethusdt', 'bnbusdt', 'usdcusdt', 'payusdt'];


const useBinancePrice = () => {
  const [prices, setPrices] = useState({});
  const {price5minAgo, setPrice5minAgo} = usePriceStore();

  // Cập nhật mốc giá mỗi 2 phút
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => {
        if (!prev || Object.keys(prev).length === 0) return prev;

        return Object.entries(prev).reduce((acc, [symbol, data]) => {
          setPrice5minAgo(symbol, data.current);
          acc[symbol] = {
            ...data,
            price5minAgo: data.current,
            percentChange: 0,
          };
          return acc;
        }, {});
      });
    }, 2 * 60 * 1000); // 2 phút

    return () => clearInterval(interval);
  }, []);



  // Kết nối WebSocket
  useEffect(() => {
    const stream = symbols.map((s) => `${s}@ticker`).join('/');
    const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${stream}`);

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      const symbol = msg.data.s.toLowerCase();
      const price = parseFloat(msg.data.c).toFixed(2);

      setPrices((prev) => {
        const oldPrice = price5minAgo?.[symbol] ?? price;
        const percentChange =
          ((parseFloat(price) - parseFloat(oldPrice)) / parseFloat(oldPrice)) * 100;

        return {
          ...prev,
          [symbol]: {
            current: price,
            price5minAgo: oldPrice,
            percentChange,
          },
        };
      });
    };

    return () => ws.close();
  }, [price5minAgo]);

  return prices;
};

export default useBinancePrice;