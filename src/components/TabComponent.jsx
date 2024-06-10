import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="C.Doações" value="1" />
            <Tab label="Ongs" value="2" />
            <Tab label="Pontos" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          Abaixo temos alguns ceps de Centro de Doações do Rio de Janeiro:{" "}
          <br />
          <br />
          21941-000 - Base da Força Aérea Brasileira <br />
          21351-030 - Sede da Central Única das Favelas <br />
          20510-412 - Petz Maracanã <br />
          22793-080 - Petz Barra da Tijuca <br />
        </TabPanel>
        <TabPanel value="2">
          Abaixo temos alguns links de Ongs do Rio de Janeiro: <br />
          <br />
          <a
            href="https://www.ongsbrasil.com.br/ongs-ambientais-stories.asp?Estado=RJ&Cidade=Rio%20de%20Janeiro"
            target="_blank"
          >
            ONGs Brasil
          </a>
          <br />
          <a href="https://vivario.org.br/" target="_blank">
            Viva Rio
          </a>
          <br />
          <a href="https://cufa.org.br/" target="_blank">
            CUFA
          </a>
          <br />
          <a href="https://www.noizprojetosocial.org/" target="_blank">
            Projeto Noiz
          </a>
          <br />
          <a
            href="https://www.ongsbrasil.com.br/ongs-ambientais-stories.asp?Estado=RJ&Cidade=Rio%20de%20Janeiro"
            target="_blank"
          >
            IES
          </a>
          <br />
        </TabPanel>

        <TabPanel value="3">
          Abaixo temos alguns ceps de Locais que realizam envios de doações do
          Rio de Janeiro: <br />
          <br />
          22260-020 - Igreja Exército de Salvação Botafogo <br />
          21911-250​  - Igreja Assembleia de Deus Ministério da Ilha <br />
          21041-150​ - Igreja Assembleia de Deus Ministério Bonsucesso <br />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
