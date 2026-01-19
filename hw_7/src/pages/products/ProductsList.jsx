import { useParams } from "react-router";
import apiRoutes from "../../api/apiRoutes";
import useFetch from "../../components/CustomHooks/useFetch";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import styles from './ProductsList.module.css'

function ProductsList() {
  const {
    data: products,
    loading,
    error,
  } = useFetch(apiRoutes.productsList);

  const {category} = useParams()

  

  const filteredProducts = category ? products.filter(p => p.category === category) : products;
  console.log(filteredProducts);

  useEffect(() => {
	
  console.log("Filtered products:", filteredProducts);
}, [filteredProducts]);
  
if (loading) {
    return <p>Завантаження продуктів...</p>;
  }
  if (error) {
    return (
      <p style={{ color: "red" }}>Помилка завантаження продуктів: {error}</p>
    );
  }
  return (
    <div className={styles.productsList}>
      {!!filteredProducts &&
        filteredProducts.length > 0 &&
        filteredProducts.map((product) => <ProductItem key={product.id} product={product}/>)}
    </div>
  );
}

export default ProductsList;
