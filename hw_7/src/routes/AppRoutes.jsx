import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import PaymentsRule from "../pages/PaymentsRule";
import ProductsList from "../pages/products/ProductsList";
import Shop from "../pages/products/Shop";
import Page404 from "../pages/Page404";
import ProductItemDetails from "../pages/products/ProductItemDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Shop />}>
        {/* <Route index element={<ProductsList />} /> */}
        <Route path=":category?" element={<ProductsList />} />
        <Route path=":category/:id" element={<ProductItemDetails />} />
      </Route>

      <Route path="/payments-rule" element={<PaymentsRule />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
