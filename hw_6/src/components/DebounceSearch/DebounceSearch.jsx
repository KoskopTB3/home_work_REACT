import { useState } from "react";
import { useDebounce } from "../CustomHooks/useDebounce";
import useFetch from "../CustomHooks/useFetch";
import styles from "./DebounceSearch.module.css";

function DebounceSearch() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const url = debouncedQuery
    ? `https://dummyjson.com/users/search?q=${debouncedQuery}`
    : null;

  const { data, loading, error } = useFetch(url);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Пошук користувачів</h2>

      <input
        className={styles.searchInput}
        type="text"
        placeholder="Пошук користувача..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className={styles.statusBlock}>
        {loading && (
          <>
            <span className={styles.loadingDot}></span>
            <span className={styles.loading}>Завантаження...</span>
          </>
        )}
        {error && <span className={styles.error}>{error}</span>}
      </div>

      {data && data.length > 0 && (
        <div className={styles.resultsContainer}>
          <ul className={styles.resultsList}>
            {data.map((user) => (
              <li key={user.id} className={styles.resultItem}>
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
          <div className={styles.resultCount}>
            Знайдено: {data.length} результатів
          </div>
        </div>
      )}

      {!loading && !error && (!data || data.length === 0) && query && (
        <div className={styles.emptyState}>Немає результатів для "{query}"</div>
      )}

      {!query && !loading && !error && (
        <div className={styles.emptyState}>
          Почніть вводити для пошуку користувача...
        </div>
      )}
    </div>
  );
}

export default DebounceSearch;
