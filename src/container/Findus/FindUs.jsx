import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contato">
    <div className="app__wrapper_info">
      <SubHeading title="Contato" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Encontre-nos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Rua das Palmeiras, 123, Centro, São Paulo, SP, 01000-000
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horário de Funcionamento
        </p>
        <p className="p__opensans">Seg - Sex: 10:00 - 02:00</p>
        <p className="p__opensans">Sáb - Dom: 10:00 - 03:00</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visite-nos
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="imagem_localizacao" />
    </div>
  </div>
);

export default FindUs;
