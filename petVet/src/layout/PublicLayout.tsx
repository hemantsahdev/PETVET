import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainRouter from "../routes/MainRouter";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <MainRouter />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
