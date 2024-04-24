import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import CampoTexto from "./componentes/CampoTexto"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const ContainerBanner = styled.div`
  margin-inline: auto;
  display: flex;
  gap: 24px;
`
function App() {
  return (
  <FundoGradiente>
    <EstilosGlobais/>
    <Cabecalho/>
    <ContainerBanner>
      <BarraLateral/>
      <Banner texto={"A galeira mais completa de fotos do espaço"} backgroundImage={'./banner/FotoBanner.png'}/>
    </ContainerBanner>
    
  </FundoGradiente>
  )
}

export default App
