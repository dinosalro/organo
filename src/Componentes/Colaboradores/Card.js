import React from "react";
import { BoxCard } from "./cardStyled";

const Card = ({ nome, cargo, imagem, corFundo }) => {
  return (
    <BoxCard>
      <div style={{ backgroundColor: corFundo }}>
        <img src={imagem} />
      </div>

      <div>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </BoxCard>
  );
};

export default Card;
