import Banner from "./Componentes/Banner/Banner";
import Formulario from "./Componentes/Formulario/Formulario";
import React from "react";
import GlobalStyled from "./GlobalStyled";
import Times from "./Componentes/Times/Times";
import Rodape from "./Rodape/Rodape";

function App() {
  const [colaboradores, setColaboradores] = React.useState([]);
  const colaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  const times = [
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  return (
    <div>
      <GlobalStyled />
      <Banner />
      <Formulario
        colaboradorCadastrado={(colaborador) =>
          colaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => {
        return (
          <Times
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.lista === time.nome
            )}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
