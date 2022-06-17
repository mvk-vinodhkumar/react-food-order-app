import React from "react"

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {}, //for IDE auto-completion
  removeItem: (id) => {}, //for IDE auto-completion
})

export default CartContext
