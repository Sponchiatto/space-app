import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import CampoTexto from "./componentes/CampoTexto"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import fotos from "./fotos.json"
import { useState, useEffect } from "react"
import ModalZoom from "./componentes/ModalZoom"

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
  width: 1250px;
  margin: 0 auto; // Centralizar na tela
  max-width: 100%;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoComZoom, setFotoComZoom] = useState(null) // Favoritar foto e dar Zoom na foto
  const [tag, setTag] = useState(0) //filtro por tag
  const [filtro, setFiltro] = useState('') //filtro via campo texto

useEffect(() => {
  const fotosFiltradas = fotos.filter(foto => {
    const filtroPorTag = !tag || foto.tagId === tag
    const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
    return filtroPorTag && filtroPorTitulo
  })
  setFotosDaGaleria(fotosFiltradas)
}, [filtro, tag])

const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoComZoom?.id) {
        setFotoComZoom({
            ...fotoComZoom,
            favorita: !fotoComZoom.favorita
        });
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
        return {
            ...fotoDaGaleria,
            favorita: fotoDaGaleria.id === foto.id ? !fotoDaGaleria.favorita : fotoDaGaleria.favorita
        };
    }));
};

  const fecharModal = () => {
    setFotoComZoom(null);
  };

  return (
  <FundoGradiente>
    <EstilosGlobais/>

    <AppContainer>
    <Cabecalho
      filtro = {filtro}
      setFiltro={setFiltro}
    />
      <ContainerMain>
        <BarraLateral/>
        <ConteudoGaleria>
          <Banner texto={"A galeira mais completa de fotos do espaço"} backgroundImage={'./banner/FotoBanner.png'}/>
          <Galeria 
            fotos = {fotosDaGaleria} 
            aoAlternarFavorito = {aoAlternarFavorito}
            aoFotoSelecionada = { foto => setFotoComZoom(foto)}
            setTag = {setTag}
          />
        </ConteudoGaleria>
      </ContainerMain>
    </AppContainer> 
    <ModalZoom foto = {fotoComZoom} aoFechar = {fecharModal}  aoAlternarFavorito = {aoAlternarFavorito}/>
  </FundoGradiente>
  
  )
}

export default App
