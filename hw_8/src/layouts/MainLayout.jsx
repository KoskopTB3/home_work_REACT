import { Outlet } from "react-router";
import Footer from "./layoutComponents/Footer";
import Header from "./layoutComponents/Header";
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
