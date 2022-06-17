import { useState } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import AvailableMeals from "./components/Meals/AvailableMeals"
import MealsSummary from "./components/Meals/MealsSummary"
import CartProvider from "./store/CartProvider"

function App() {
  const [cartIsShown, setCartisShown] = useState(false)

  const showCartHandler = () => {
    setCartisShown(true)
  }
  const closeCartHandler = () => {
    setCartisShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  )
}

export default App
