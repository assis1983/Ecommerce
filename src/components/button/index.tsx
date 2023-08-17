import { ButtonStyle } from "./styles"

type Props = {
    text: string
    variante: 'adicionar' | 'carrinho' 
    onClick: () => void
}

export function Button ({text, variante, onClick}: Props) {
    
    return (
        <ButtonStyle type="button" variante={variante} onClick={onClick}>
            {text}
            
        </ButtonStyle>


    )
}