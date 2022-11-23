import { BoxRodape } from "./rodapeStyled";
import React from "react";
import facebook from "../Componentes/imagens/fb.png";
import instagram from "../Componentes/imagens/ig.png";
import twitter from "../Componentes/imagens/tw.png";
import logo from "../Componentes/imagens/logo.png";

const Rodape = () => {
  return (
    <BoxRodape>
      <div>
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
      </div>
      <div>
        <img src={logo} />
      </div>
      <div>
        <p>Desenvolvido por Alura.</p>
      </div>
    </BoxRodape>
  );
};

export default Rodape;
