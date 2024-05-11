import Titulo from "../Titulo"
import Image from "./Imagem"
import Populares from "./Populares"
import Tags from "./Tags"
import {styled} from "styled-components"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

const Galeria = ({fotos = [], aoFotoSelecionada, aoAlternarFavorito}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>  
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => 
                            <Image 
                                aoZoomSolicitado = {aoFotoSelecionada}
                                aoAlternarFavorito = {aoAlternarFavorito}
                                key = {foto.id} 
                                foto = {foto}
                            />
                        )}
                    </ImagensContainer>
                    
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
        
    )
}

export default Galeria