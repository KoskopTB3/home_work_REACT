import styles from "./OrderManagerStyles.module.css";
import { useState } from "react";

function OrderManager() {
  const [input, setInput] = useState("");
  const [waitingOrders, setWaitingOrders] = useState(() => []);
  const [inProgressOrders, setInProgressOrders] = useState(() => []);
  const [readyOrders, setReadyOrders] = useState(() => []);

  const orderList = [
    { id: Date.now(), title: "Очікують на виконання", status: waitingOrders },
    { id: Date.now(), title: "Виконуються", status: inProgressOrders },
    { id: Date.now(), title: "Готові до виносу", status: readyOrders },
  ];

  function addNewOrder() {
    if (!input.trim()) return;

    const newDish = {
      id: Date.now(),
      title: input,
    };

    setWaitingOrders((prevOrders) => [...prevOrders, newDish]);
    setInput("");
  }

  function startCooking(id) {
    const orderToMove = waitingOrders.find((order) => order.id === id);
    setInProgressOrders((prevOrders) => [...prevOrders, orderToMove]);
    setWaitingOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== id)
    );
  }

  function finishCooking(id) {
    const orderToMove = inProgressOrders.find((order) => order.id === id);
    setReadyOrders((prevOrders) => [...prevOrders, orderToMove]);
    setInProgressOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== id)
    );
  }

  function serveDish(id) {
    setReadyOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== id)
    );
  }

  function orderListItem(orderCategory) {
    return (
      <div className={styles.categoryList}>
        <h3>{orderCategory.title}</h3>
        {orderCategory.status.map((order) => (
          <div key={order.id} className={styles.orderItem}>
            <span>{order.title}</span>

            {/* кнопка в залежності від статусу */}
            {orderCategory.title === "Очікують на виконання" && (
              <button
                className={styles.actionBtn + " " + styles.start}
                onClick={() => startCooking(order.id)}
              >
                Готувати
              </button>
            )}

            {orderCategory.title === "Виконуються" && (
              <button
                className={styles.actionBtn + " " + styles.finish}
                onClick={() => finishCooking(order.id)}
              >
                Приготовлено
              </button>
            )}

            {orderCategory.title === "Готові до виносу" && (
              <button
                className={styles.actionBtn + " " + styles.serve}
                onClick={() => serveDish(order.id)}
              >
                Подано
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }

  function createOrderList() {
    return orderList.map((orderCategory) => orderListItem(orderCategory));
  }

  return (
    <>
      <div className={styles.taskContainer}>
        <div className={styles.inputContainer}>
          <label>
            Нова замовлена страва
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <button onClick={addNewOrder}>Додати</button>
        </div>
        <div className={styles.tableContainer}>{createOrderList()}</div>
      </div>
    </>
  );
}

export default OrderManager;

// Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список
// “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список
// “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”.
// Якщо натиснути на “Подано” - страва зникає з таблиці
