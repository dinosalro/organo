import React from "react";
import Card from "../Colaboradores/Card";
import { BoxTimes, Cards } from "./timesStyled";

const Times = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <div>
        <BoxTimes style={{ backgroundColor: props.corSecundaria }}>
          <h3 style={{ borderColor: props.corPrimaria }}> {props.nome}</h3>

          <Cards>
            {props.colaboradores.map((colaborador, index) => {
              return (
                <Card
                  key={index}
                  corFundo={props.corPrimaria}
                  nome={colaborador.nome}
                  cargo={colaborador.cargo}
                  imagem={colaborador.imagem}
                />
              );
            })}
          </Cards>
        </BoxTimes>
      </div>
    )
  );
};

export default Times;
