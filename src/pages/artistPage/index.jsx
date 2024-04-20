import React from "react";
import ArtistHero from "../../components/artistPage/artistHero";
import AnimakidComponent from "../../components/artistPage/animakid";
import ArtistCardsComponent from "../../components/artistPage/artistCards";

function ArtistPage() {
   return(
      <>
         <ArtistHero/>
         <AnimakidComponent/>
         <ArtistCardsComponent/>
      </>
   )
}

export default ArtistPage