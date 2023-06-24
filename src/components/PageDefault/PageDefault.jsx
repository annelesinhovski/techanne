import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { PageContainer } from "../PageDefault/PageDefault.styles";

function Page({ children }) {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  );
}

export default Page;
