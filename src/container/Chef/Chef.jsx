import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="imagem_chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palavra do Chef" />
      <h1 className="headtext__cormorant">No que acreditamos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="imagem_citação" />
          <p className="p__opensans">
            Nossa missão é proporcionar uma experiência única
          </p>
        </div>
        <p className="p__opensans">
          através da combinação de sabores frescos e inovadores. Acreditamos que
          a comida tem o poder de unir pessoas e criar memórias inesquecíveis.
          Cada prato é preparado com dedicação, usando ingredientes de alta
          qualidade para oferecer o melhor da culinária.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Fundador</p>
        <img src={images.sign} alt="imagem_assinatura" />
      </div>
    </div>
  </div>
);

export default Chef;
