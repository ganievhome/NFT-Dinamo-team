import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import NotFound from "../pages/notFound";
import ArtistPage from "../pages/artistPage";
import ConnectWallet from "../pages/connectWallet";
import CreateAccount from "../pages/createAccount";
import Marketplace from "../pages/marketplace";
import NFTPage from "../pages/NFTPage";
import Ranking from "../pages/ranking";

function RouterComponent() {
   return(
      <>
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/artist" element={<ArtistPage/>} />
         <Route path="/connect-wallet" element={<ConnectWallet/>} />
         <Route path="/*" element={<NotFound/>} />
         <Route path="/create-account" element={<CreateAccount/>} />
         <Route path="/marketplace" element={<Marketplace/>} />
         <Route path="/nft" element={<NFTPage/>} />
         <Route path="/ranking" element={<Ranking/>} />
      </Routes>
      </>
   )
}
export default RouterComponent