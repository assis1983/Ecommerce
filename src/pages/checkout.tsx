import { Container, ImgChek, RowCheck } from '../components/products/style'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Title } from '../components/title'
import { useLocation } from 'react-router-dom'
import { products } from '../utils/products'
import { Button } from '../components/button'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate = useNavigate()
  const location = useLocation()
  const { selectedItems, totalAmount, itemQuantities } = location.state

  const formattedTotalAmount = totalAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  function goToPage() {
    navigate('/')
  }

  return (
    <>
      <Container>
        <Header />
        <Title text={'Checkout'} />
        <h1>Produtos Escolhidos:</h1>
        <ul>
          {selectedItems.map((itemId: number) => {
            const selectedItem = products.find(item => item.id === itemId)
            const quantity = itemQuantities[itemId] || 0

            return (
              <div key={itemId}>
                {selectedItem && (
                  <RowCheck>
                    <ImgChek src={selectedItem.image} />
                    <h3>{selectedItem.title}</h3>
                    <p>Quantidade: {quantity}</p>
                    <p>Valor Unitário: R$ {selectedItem.price}</p>
                    <p>Subtotal: R$ {selectedItem.price * quantity}</p>
                  </RowCheck>
                )}
              </div>
            )
          })}
        </ul>
        <div>
          <Title text={`Total da Compra: R$ ${formattedTotalAmount}`} />
        </div>
        <div className="confirmcompra">
          <Button
            text={'Confirmar Compra'}
            variante={'adicionar'}
            onClick={goToPage}
          />
        </div>
        <Footer />
      </Container>
    </>
  )
}
