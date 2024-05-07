/* This code snippet is a React component named `BarraLateral` that represents a
sidebar navigation menu. Here's a breakdown of what the code is doing: */

/* The code snippet `import styled from "styled-components"; import ItemNavegacao
from "./ItemNavegacao"; import Banner from "../Banner";` is importing necessary
modules and components for the React component `BarraLateral` to function
properly. */
import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import Banner from "../Banner";

/* `const ListaEstilizada = styled.ul` is using the `styled-components` library to
create a styled `ul` element. The CSS properties `padding: 0;`, `margin: 0;`,
and `width: 212px;` are applied to this styled `ul` element. This styling
ensures that the unordered list (`ul`) rendered in the component `BarraLateral`
has zero padding, zero margin, and a fixed width of 212 pixels. This helps in
customizing the appearance of the sidebar navigation menu in the React
component. */
const ListaEstilizada = styled.ul`
    padding: 0;
    margin: 0;
    width: 212px;
`

/* The `const BarraLateral` is a functional React component that represents a
sidebar navigation menu. Here's a breakdown of what the code inside the
component is doing: */
const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                    iconeAtivo={"/icones/home-ativo.png"} 
                    iconeInativo={"icones/home-inativo.png"} 
                    ativo = {true}>
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao 
                    iconeAtivo={"/icones/mais-vistas-ativo.png"} 
                    iconeInativo={"icones/mais-vistas-inativo.png"} 
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                    iconeAtivo={"/icones/mais-curtidas-ativo.png"} 
                    iconeInativo={"icones/mais-curtidas-inativo.png"} 
                    >
                        Mais Curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                    iconeAtivo={"/icones/novas-ativo.png"} 
                    iconeInativo={"icones/novas-inativo.png"} 
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                    iconeAtivo={"/icones/surpreenda-me-ativo.png"} 
                    iconeInativo={"icones/surpreenda-me-inativo.png"} 
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
    
        </aside>
        
    )
}

export default BarraLateral;