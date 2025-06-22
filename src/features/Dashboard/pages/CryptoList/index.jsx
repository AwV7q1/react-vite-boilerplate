import React from 'react';
import useBinancePrice from "@features/Dashboard/hooks/binance/useBinancePrice.jsx";
import styles from "./cryptoList.module.scss"
import btcusdtImg from "@assets/images/binance/btcusdt.png"
import ethusdtImg from "@assets/images/binance/ethusdt.png"
import bnbusdtImg from "@assets/images/binance/bnbusdt.png"
import usdcusdtImg from "@assets/images/binance/usdcusdt.png"

const CryptoList = () => {
  const prices = useBinancePrice();

  const ImgCrypto = (symbol) => {
    const renderMethod = {
      "btcusdt": () => <img src={btcusdtImg} alt={btcusdtImg} className={styles.img}/>,
      "ethusdt": () => <img src={ethusdtImg} alt={ethusdtImg} className={styles.img}/>,
      "bnbusdt": () => <img src={bnbusdtImg} alt={bnbusdtImg} className={styles.img}/>,
      "usdcusdt": () => <img src={usdcusdtImg} alt={usdcusdtImg} className={styles.img}/>,
    }
    return renderMethod[symbol]();
  }

  const NameCrypto = (symbol) => {
    const renderMethod = {
      "btcusdt": () => <span className={styles.symbolName}>BTC</span>,
      "ethusdt": () => <span className={styles.symbolName}>ETH</span>,
      "bnbusdt": () => <span className={styles.symbolName}>BNB</span>,
      "usdcusdt": () => <span className={styles.symbolName}>USDT</span>,
    }

    return renderMethod[symbol]();
  }


  return (
    // <div className={styles.container}>
    //   {Object.entries(prices.prices).map(([symbol, price]) => (
    //     <div key={symbol} className={styles.cryptoItem}>
    //       {ImgCrypto(symbol)}
    //       {NameCrypto(symbol)}
    //       <span className={styles.price}>${price}</span>
    //     </div>
    //   ))}
    // </div>

    <div>
      <h2 className={styles.titleSection}>Live Prices (2-Min Change)</h2>
      <div className={styles.container}>
        {Object.entries(prices).map(([symbol, data]) => {
          const isUp = data.percentChange > 0;
          const color = isUp ? 'green' : data.percentChange < 0 ? 'red' : 'gray';
          const sign = isUp ? '+' : '';

          return (
            <div key={symbol} className={styles.cryptoItem}>
              <div className={styles.symbolWrapper}>
                {ImgCrypto(symbol)}
                {NameCrypto(symbol)}
              </div>
              <span className={styles.price}>
                    ${Number(data.current).toLocaleString(undefined, {minimumFractionDigits: 2})}
              </span>

              <span style={{color}} className={styles.percentChange}>
                {sign}{data.percentChange.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoList;