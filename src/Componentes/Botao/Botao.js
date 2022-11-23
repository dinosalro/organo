import React from "react";
import { BotaoM } from "./botaoStyled";

const Botao = (props) => {
  return (
    <div>
      <BotaoM>{props.children}</BotaoM>
    </div>
  );
};

export default Botao;
