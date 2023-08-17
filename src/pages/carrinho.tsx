import { useState } from 'react'
import { Container, Image } from '../components/products/style'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Button } from '../components/button'
import { Title } from '../components/title'
import { useNavigate, useLocation } from 'react-router-dom'
import { products } from '../utils/products'
import { CartStyle, Info } from '../components/products/style'

export function Cart() {
  const navigate = useNavigate()
  const location = useLocation()
  const selectedItems: number[] = location.state?.selectedItems || []
  const [itemQuantities, setItemQuantities] = useState<{
    [itemId: number]: number
  }>(selectedItems.reduce((acc, itemId) => ({ ...acc, [itemId]: 1 }), {}))

  function handleIncrease(itemId: number) {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1
    }))
  }

  function handleDecrease(itemId: number) {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0)
    }))
  }

  function goToPage() {
    navigate('/checkout', {
      state: {
        selectedItems,
        totalAmount,
        itemQuantities
      }
    })
  }

  const totalAmount = selectedItems.reduce((total, itemId) => {
    const item = products.find(product => product.id === itemId)
    const quantity = itemQuantities[itemId] || 0
    return total + (item ? item.price * quantity : 0)
  }, 0)

  const formattedTotalAmount = totalAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <>
      <Container>
        <Header />
        <Title text={'Carrinho'} />
        <ul>
          {selectedItems.map(itemId => {
            const selectedItem = products.find(item => item.id === itemId)
            return (
              <div key={itemId}>
                {selectedItem && (
                  <CartStyle>
                    <Image src={selectedItem.image} />
                    <Info>
                      <Title text={selectedItem.title} />
                      <h3>Valor R$ {selectedItem.price}</h3>
                      <h4>Quantidade: {itemQuantities[itemId] || 0}</h4>
                      <Button
                        text={'+'}
                        variante={'adicionar'}
                        onClick={() => handleIncrease(itemId)}
                      />
                      <Button
                        text={'-'}
                        variante={'adicionar'}
                        onClick={() => handleDecrease(itemId)}
                      />
                    </Info>
                  </CartStyle>
                )}
              </div>
            )
          })}
        </ul>
        <div>
          <Title text={`Total da Compra: R$ ${formattedTotalAmount}`} />
        </div>
        <Button
          text={'Finalizar Compra'}
          variante={'adicionar'}
          onClick={goToPage}
        />
        <Footer />
      </Container>
    </>
  )
}
