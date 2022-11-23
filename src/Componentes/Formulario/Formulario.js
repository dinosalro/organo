import React from "react";
import Botao from "../Botao/Botao";
import Lista from "../ListaSuspensa/Lista";
import Form from "../Texto/Form";
import { BoxFormulario, BoxSection } from "./formularioStyled";

const Formulario = (props) => {
  const [nome, setNome] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  const [lista, setLista] = React.useState("");

  const aoSalvar = (event) => {
    event.preventDefault();

    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      lista,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setLista("");
  };
  return (
    <BoxSection>
      <BoxFormulario onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar um card de colaborador.</h2>
        <Form
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(nome) => setNome(nome)}
        />
        <Form
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={(cargo) => setCargo(cargo)}
        />
        <Form
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          valor={imagem}
          aoAlterado={(imagem) => setImagem(imagem)}
        />
        <Lista
          obrigatorio={true}
          label="Times"
          itens={props.times}
          valor={lista}
          aoAlterado={(lista) => setLista(lista)}
        />
        <Botao>Criar Card</Botao>
      </BoxFormulario>
    </BoxSection>
  );
};

export default Formulario;
