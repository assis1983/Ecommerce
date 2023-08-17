import { FooterContainer } from "./style"
import Cardone from '../../assets/images/visa.png'
import Cardtree from '../../assets/images/master.png'
import Cardfor from '../../assets/images/boleto.png'
import Cardtwo from '../../assets/images/hipercard.png'


export function Footer() {
    return (
        <>
            <h3>Meios de pagamentos:</h3>
            <FooterContainer>
                <img src={Cardtwo} />
                <img src={Cardtree} />
                <img src={Cardfor} />
                <img src={Cardone} />
            </FooterContainer>

        </>
        

    )
}