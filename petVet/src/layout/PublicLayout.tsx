import React, { Children } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}


const PublicLayout: React.FC<PublicLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <main>
       {children}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
