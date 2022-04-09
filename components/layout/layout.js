import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
