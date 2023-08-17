import styled from 'styled-components'

export const ButtonStyle = styled.button<{ variante: 'adicionar' | 'carrinho' }>`
  background-color:  #6950A1;
  color: #ffffff;
  margin: 10px;
  border-radius: ${({ variante }) => (variante === 'adicionar' ? '16px' : '5px')};
  cursor: pointer;
  border: none;
  width: ${({ variante }) => (variante === 'adicionar' ? '20rem' : '10rem')};
  height: ${({ variante }) => (variante === 'adicionar' ? '56px' : '40px')};
  margin-left: ${({ variante }) => (variante === 'carrinho' ? '90rem' : '')};
  font-size: 18px;
  cursor: pointer;  
  
`