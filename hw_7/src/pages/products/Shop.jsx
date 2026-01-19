import { Link, Outlet } from "react-router";
import apiRoutes from "../../api/apiRoutes";
import useFetch from "../../components/CustomHooks/useFetch";
import navigate from "../../routes/frontRoutes";
import styles from "./Shop.module.css";

function Shop() {
  const { data, loading, error } = useFetch(apiRoutes.productsList);

  const categories = data
    ? [...new Set(data.map((item) => item.category))]
    : [];

  if (loading) {
    return <div className={styles.loading}>Завантаження продуктів...</div>;
  }
  if (error) {
    return (
      <div className={styles.error}>
        Помилка завантаження продуктів: {error}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Магазин</h1>
      </div>
      <div className={styles.shopLayout}>
        <div className={styles.sidebar}>
          <div className={styles.categoriesLabel}>Категорії</div>
          {categories.length > 0 && (
            <div className={styles.categoriesContainer}>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={navigate.getCategory(category)}
                  className={styles.categoryLink}
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Shop;
