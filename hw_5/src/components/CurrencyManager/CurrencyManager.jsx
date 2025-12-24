import { useState } from "react";
import useFetch from "./useFetch";
import styles from "./CurrencyManager.module.css";

import ValueInputBlock from "./ValueInputBlock";
import CalculationBlock from "./CalculationBlock";

function CurrencyManager() {
  const [amountUAH, setAmountUAH] = useState("");
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(null);

  const { data, loading, error } = useFetch(
    "/NBUStatService/v1/statdirectory/exchange?json"
  );

  if (loading) {
    return <p>Завантаження продуктів...</p>;
  }
  if (error) {
    return (
      <p style={{ color: "red" }}>Помилка завантаження продуктів: {error}</p>
    );
  }

  const selectedCurrency = data.find((cur) => cur.id === selectedCurrencyId);

  const result =
    amountUAH && selectedCurrency ? amountUAH / selectedCurrency.rate : null;

  return (
    <div className={styles.currencyManager}>
      <div className={styles.inputBlock}>
        <ValueInputBlock getAmountMoney={setAmountUAH} />
      </div>

      <div className={styles.calcBlock}>
        <CalculationBlock
          dataExchange={data}
          onSelectCurrency={setSelectedCurrencyId}
        />
      </div>

      {!!result && (
        <div className={styles.result}>
          <span className={styles.label}>Розрахункова вартість:</span>
          <span className={styles.value}>{result.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

export default CurrencyManager;
