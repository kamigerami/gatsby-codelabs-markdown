import React from "react";
import Layout from "../Layout/Layout";
import Header from "./Header";
import Team from "./Team";
import Testimonials from "./Testimonials";

const Index = () => {
  return (
    <Layout>
      <Header />
      <Testimonials />
      <Team />
    </Layout>
  );
};

export default Index;
