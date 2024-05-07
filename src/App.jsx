import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import CampoTexto from "./componentes/CampoTexto"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const ContainerMain = styled.div`
  display: flex;
  gap: 24px;
`

const AppContainer = styled.div`
  width: 1300px;
  margin: 0 auto; // Centralizar na tela
  max-width: 100%;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  return (
  <FundoGradiente>
    <EstilosGlobais/>

    <AppContainer>
    <Cabecalho/>
      <ContainerMain>
        <BarraLateral/>
        <ConteudoGaleria>
          <Banner texto={"A galeira mais completa de fotos do espaço"} backgroundImage={'./banner/FotoBanner.png'}/>
          <Galeria/>
        </ConteudoGaleria>
      </ContainerMain>
    </AppContainer> 
  </FundoGradiente>
  )
}

export default App
