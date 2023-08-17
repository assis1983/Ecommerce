import { StyleHeader } from "./style";
import Logo from '../../assets/images/logo.png'

export function Header() {
    return (
        < StyleHeader>
            <img src={Logo} />
            <h1>Loja Virtual</h1>        
        </StyleHeader>

    )
}