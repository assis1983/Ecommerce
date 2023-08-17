import { useState } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Button } from '../components/button'
import { Title } from '../components/title'
import { products } from '../utils/products'
import {
  Row,
  Column,
  Product,
  Image,
  Price,
  Container,
  Menu
} from '../components/products/style'

import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const [count, setCount] = useState<number>(0)
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  function handleCount() {
    setCount(count + 1)
  }

  function handleItemSelect(itemId: number) {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
  }

  function goToPage() {
    navigate('/carrinho', {state: { selectedItems }})
  }
  return (
    <>
      <Container>
        <Header />
        <Menu>
          <Title text={'Produtos'}/>
          <h1 className="contador">{count}</h1>
        </Menu>
        <Row>
          {products.map(item => (
            <Column key={item.id}>
              <Product>
                <Image src={item.image} />
                <Price>Valor R${item.price}</Price>
              </Product>
              <Button
                text={'Adicionar ao Carrinho'}
                variante={'adicionar'}
                onClick={() => {
                  handleCount();
                  handleItemSelect(item.id)
              }}
              />
            </Column>
          ))}
        </Row>
        <Button
          text={'Ir para o Carrinho'}
          variante={'carrinho'}
          onClick={goToPage}
        />
        <Footer />
      </Container>
    </>
  )
}
