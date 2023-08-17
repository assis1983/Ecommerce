import { StyleTitle } from "./styles"



type Props = {
    text: string
}


export function Title({text}: Props) {
    return (
        <StyleTitle>
            {text}
        </StyleTitle>
    )
}