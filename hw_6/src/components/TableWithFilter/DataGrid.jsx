import { useEffect, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { useId } from "react";
import GridRow from "./GridRow";
import { useDeferredValue } from "react";
import { useCallback } from "react";
import styles from "./DataGrid.module.css";
import { useMemo } from "react";

function DataGrid() {
  console.log("DataGrid mounted");
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://dummyjson.com/users?limit=100");

  const searchId = useId();
  const deferredSearch = useDeferredValue(search);
  const deferredSortConfig = useDeferredValue(sortConfig);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleSort = useCallback((key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        // Якщо сортуємо по тій самій колонці - міняємо напрямок
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      // Якщо нова колонка - ставимо "asc" за замовчуванням
      return { key, direction: "asc" };
    });
  }, []);

  

   // Фільтрація + сортування
  const filteredAndSortedUsers = useMemo(() => {
    if (!users) return [];

    // Фільтрація по lastName
    let filtered = users.filter((user) =>
      user.lastName.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    // Сортування
    const { key, direction } = deferredSortConfig;
    if (key) {
      filtered.sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [users, deferredSearch, deferredSortConfig]);

  if (loading) {
    return <p>Завантаження продуктів...</p>;
  }
  if (error) {
    return (
      <p style={{ color: "red" }}>Помилка завантаження продуктів: {error}</p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBlock}>
        <label htmlFor={searchId} className={styles.searchLabel}>
          Пошук по прізвищу
        </label>
        <input
          className={styles.searchInput}
          type="text"
          id={searchId}
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Кнопки сортування */}
      <div className={styles.sortButtons}>
        <button
          className={styles.sortBtn}
          onClick={() => handleSort("firstName")}
        >
          Сортувати по імені
        </button>
        <button
          className={styles.sortBtn}
          onClick={() => handleSort("lastName")}
        > 
          Сортувати по прізвищу
        </button>
        <button className={styles.sortBtn} onClick={() => handleSort("age")}>
          Сортувати по віку
        </button>
      </div>

      {/* Заголовки */}
      <div className={styles.tableHeader}>
        <div>Ім'я</div>
        <div>Прізвище</div>
        <div>Вік</div>
        <div>Email</div>
      </div>

      {/* Таблиця */}
      <div className={styles.table}>
        {filteredAndSortedUsers?.length > 0 ? (
          filteredAndSortedUsers.map((user) => <GridRow key={user.id} user={user} />)
        ) : (
          <div className={styles.emptyState}>Немає результатів</div>
        )}
      </div>
    </div>
  );
}

export default DataGrid;
