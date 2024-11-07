import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contate-nos</h1>
        <p className="p__opensans">
          Rua das Palmeiras, 123, São Paulo, SP, Brasil
        </p>
        <p className="p__opensans">+55 11 2345-6789</p>
        <p className="p__opensans">+55 11 9876-5432</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo_footer" />
        <p className="p__opensans">
          &quot;A melhor maneira de se encontrar é se perder ao serviço dos
          outros.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horário de Funcionamento</h1>
        <p className="p__opensans">Segunda a Sexta:</p>
        <p className="p__opensans">08:00 - 00:00</p>
        <p className="p__opensans">Sábado e Domingo:</p>
        <p className="p__opensans">07:00 - 23:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;
