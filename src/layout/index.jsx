import React from "react";
import Header from '../components/header/index'
import Footer from "../components/footer";

function Layout({children}){
   return(
      <>
      <Header/>
         {children}
      <Footer/>
      </>
   )
}
export default Layout