import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Persiga o novo sabor" />
      <h1 className="app__header-h1">A Chave Para um Jantar Sofisticado</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sente-se confortavelmente enquanto desfruta de uma experiência
        gastronômica única. O sabor, a qualidade e a apresentação fazem parte da
        nossa promessa de oferecer o melhor para você.
      </p>
      <button type="button" className="custom__button">
        Explorar o Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="imagem_de_cabecalho" />
    </div>
  </div>
);

export default Header;
