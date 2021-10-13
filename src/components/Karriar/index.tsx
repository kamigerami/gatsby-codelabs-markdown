import React from "react";
import Layout from "../Layout/Layout";
import Header from "./Header";
import Karriar from "./Karriar";
import Formaner from "./Formaner";
import Tjanster from "./Tjanster";

const Index = () => {
  return (
    <Layout>
      <Header />
      <Karriar />
      <Formaner />
      <Tjanster />
    </Layout>
  );
};

export default Index;
