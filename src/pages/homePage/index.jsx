import React from "react";
import Hero from '../../components/homePage/hero/index'
import TrendingCollection from "../../components/homePage/trendingCollection";
import TopCreators from "../../components/homePage/topCreators";
import BrowseCategory from "../../components/homePage/browsecategorys";
import DiscoverMoreNFT from "../../components/homePage/discoverMoreNFT";
import MagicMashrooms from "../../components/homePage/magicMashrooms";
import HowItWorks from "../../components/homePage/howItWorks";
import JoinOurWeekly from "../../components/homePage/joinOurWeekly";


function HomePage() {
   return(
      <>
         <Hero/>
         <TrendingCollection/>
         <TopCreators/>
         <BrowseCategory/>
         <DiscoverMoreNFT/>
         <MagicMashrooms/>
         <HowItWorks/>
         <JoinOurWeekly/>
      </>
   )
}

export default HomePage