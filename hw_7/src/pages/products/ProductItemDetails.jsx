import { useParams } from "react-router";
import useFetch from "../../components/CustomHooks/useFetch";
import apiRoutes from "../../api/apiRoutes";

function ProductItemDetails() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(apiRoutes.getProductById(id));

  if (loading) {
    return <p>Завантаження продуктів...</p>;
  }
  if (error) {
    return (
      <p style={{ color: "red" }}>Помилка завантаження продуктів: {error}</p>
    );
  }

  return (
    <div>
      <div>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div>{product.name}</div>
      <div>{product.price} грн.</div>
    </div>
  );
}

export default ProductItemDetails;
