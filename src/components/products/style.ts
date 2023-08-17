import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
  margin-top: 5%;
`

export const Column = styled.div`
  max-width: 33.3333%;
  flex: 0 0 33.3333%;
  padding: 0 5rem;
  margin-bottom: 1rem;
`

export const Product = styled.div`
  position: relative;
`

export const Image = styled.img`
  object-fit: contain;
  width: 22rem;
`

export const Price = styled.div`
  margin-left: 20%;
  font-size: 1.3rem;
  color: #313131;
  font-weight: bold;
`
export const Container = styled.div`
  margin: auto;
  width: 100rem;
  .confirmcompra {
    display: flex;
    justify-content: center;
  }
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contador {
    width: 3rem;
    background-color: #6950a1;
    border-radius: 1rem;
    text-align: center;
    color: #fff;
  }
`
export const CartStyle = styled.div`
  display: flex;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`
export const ImgChek = styled.img`
  object-fit: contain;
  width: 22rem;
`
export const RowCheck = styled.div`
  flex-direction: column;
`
