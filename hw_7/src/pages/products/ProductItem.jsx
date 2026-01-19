import { Link } from "react-router";
import navigate from "../../routes/frontRoutes";
import styles from './ProductsList.module.css'

function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <div className={styles.imageWrapper}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div>{product.name}</div>
      <div>{product.price} грн.</div>
      <Link to={navigate.getProductDetail(product.category, product.id)}>
        Детальніше
      </Link>
    </div>
  );
}

export default ProductItem;
