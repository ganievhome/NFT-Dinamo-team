import React from "react";
import MarketplaceHero from "../../components/marketplace/marketplaceHero";
import MarketplaceCards from "../../components/marketplace/marketplaceCards";
import styles from "./style.module.css"



function Marketplace() {
   return (
      <>
         <MarketplaceHero />
         <MarketplaceCards />
      </>
   )
}

export default Marketplace