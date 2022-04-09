import React from "react";
import { Auth } from "../containers";
import { Layout, SEO } from "../components";

const Home = () => {
  return (
    <Layout>
      <SEO />
      <Auth />
    </Layout>
  );
};

export default Home;
