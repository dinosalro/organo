import React from "react";
import { BoxLista } from "./listaStyled";

const Lista = (props) => {
  return (
    <BoxLista>
      <label>{props.label}</label>
      <select
        onChange={(event) => {
          props.aoAlterado(event.target.value);
        }}
        value={props.valor}
        required={props.obrigatorio}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </BoxLista>
  );
};

export default Lista;
