import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="Sobre_Nós_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nós</h1>
        <img src={images.spoon} alt="colher_sobre" className="spoon__img" />
        <p className="p__opensans">
          Somos apaixonados por criar experiências inesquecíveis. Com foco em
          qualidade e inovação, buscamos oferecer produtos e serviços que
          encantam nossos clientes a cada visita. Nossa equipe é dedicada a
          transformar cada momento em uma experiência única, cheia de sabor e
          sofisticação..
        </p>
        <button type="button" className="custom__button">
          Saber Mais
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="faca_sobre" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nossa História</h1>
        <img src={images.spoon} alt="colher_sobre" className="spoon__img" />
        <p className="p__opensans">
          Nossa jornada começou com a missão de oferecer algo especial para
          nossos clientes. Com dedicação e paixão, crescemos e refinamos nossos
          serviços, sempre com o objetivo de surpreender e proporcionar momentos
          memoráveis. Estamos apenas começando, e o melhor ainda está por vir.
        </p>
        <button type="button" className="custom__button">
          Saber Mais
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
