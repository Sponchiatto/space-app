import styled from 'styled-components';
import tags from './tags.json'
import { useState } from "react"
const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1;
    }
     &.active {
        background-color: #c98cf1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = ({setTag}) => {
    const [activeTag, setActiveTag] = useState(null); // Estado para armazenar a tag ativa

    const handleTagClick = (tag) => {
        setTag(tag);
        setActiveTag(tag); // Atualiza a tag ativa ao clicar
    };

    return (
    <TagsContainer>
        <TagTitulo>Busque por tags: </TagTitulo>
        
        <Div>
            {tags.map(tag => 
                <Tag 
                    key={tag.id} 
                    onClick={() => handleTagClick(tag.tag)}
                    className={activeTag === tag.tag ? 'active' : ''} 
                >
                    {tag.titulo}
                </Tag>)}
        </Div>
        
    </ TagsContainer>

    )
}

export default Tags

