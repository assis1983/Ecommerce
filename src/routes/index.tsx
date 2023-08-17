import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/products'
import { Cart } from '../pages/carrinho'
import Checkout from '../pages/checkout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}
