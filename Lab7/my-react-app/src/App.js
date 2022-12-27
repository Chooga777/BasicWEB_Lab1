import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";
import "./style.css"

function App() {
  return (
      <div>
        <Header />
        <Content />
        <Image />
        <div className="store">
          <GoodsCard name="Rogue Legacy 2" price="329 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1253920/header.jpg?t=1668791170"/>
          <GoodsCard name="Days Gone" price="999 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg?t=1635476187" />
          <GoodsCard name="Soulstone Survivors" price="225 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/2066020/header.jpg?t=1670517032" />
          <GoodsCard name="VALKYRIE ELYSIUM" price="1399 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1963210/header.jpg?t=1668709356" />
          <GoodsCard name="Immortals Fenyx Rising" price="915 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/2221920/header.jpg?t=1671472238" />
          <GoodsCard name="ELDEN RING" price="799 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1671759466" />
          <GoodsCard name="DARK SOULS™ III" price="900 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1671097812" />
          <GoodsCard name="Red Dead Redemption 2" price="899 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009" />
          <GoodsCard name="Forza Horizon 5" price="1199 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1668017884" />
          <GoodsCard name="Marvel’s Spider-Man Remastered" price="1399 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1667406675" />
          <GoodsCard name="God of War" price="1199 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420" />
          <GoodsCard name="Hades" price="329 гривень" img="https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1670649855" />
        </div>
      </div>
  );
}

export default App;