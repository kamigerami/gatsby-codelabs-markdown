import React from "react";
import Layout from "../Layout/Layout";
import OmOss from "./OmOss";
import Header from "./Header";
import SenasteInlagg from "./SenasteInlagg";
import Kunder from "./Kunder";
import Formaner from "./Formaner";

const Index = () => {
  return (
    <Layout>
      <Header />
      <OmOss />
      <Formaner />
      <div className="bg-grey-normal w-full">
        <SenasteInlagg title="Senaste inlägg från bloggen" titlecolor="#fff"/>
      </div>
      <Kunder />
    </Layout>
  );
};

export default Index;
