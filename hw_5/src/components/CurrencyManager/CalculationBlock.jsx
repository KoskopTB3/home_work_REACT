import { useState } from "react";
import styles from "./CurrencyManager.module.css";

function CalculationBlock({ dataExchange, onSelectCurrency }) {
  const [selectedCurrencyId, setSelectedCurrencyId] = useState("");

  function onSelect(e) {
    const currentId = Number(e.target.value);
    setSelectedCurrencyId(currentId);
    onSelectCurrency(currentId);
  }

  const selectedCurrency = dataExchange.find(
    (currency) => currency.id === selectedCurrencyId
  );

  return (
    <div className={styles.calculationBlock}>
      <h2>Валюта {selectedCurrency?.cc}</h2>
      <p>
        {selectedCurrency && <span>Курс обміну {selectedCurrency.rate.toFixed(2)}</span>}
      </p>
      <div className={styles.selectContainer}>
        <select onChange={onSelect} value={selectedCurrencyId}>
          <option value="">Оберіть валюту</option>
          {dataExchange.map((currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CalculationBlock;
