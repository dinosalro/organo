import React from "react";
import { Texto } from "./formStyled";

const Form = (props) => {
  const addAoInput = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <Texto>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        value={props.valor}
        onChange={addAoInput}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </Texto>
  );
};

export default Form;
