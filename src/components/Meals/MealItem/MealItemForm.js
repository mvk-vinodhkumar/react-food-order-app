import { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitFormHandler = (event) => {
    event.preventDefault()

    const enterAmount = amountInputRef.current.value
    const enterAmountNumber = +enterAmount

    if (enterAmount.trim().length === 0 || enterAmount < 1 || enterAmount > 5) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enterAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
      {!amountIsValid && (
        <p style={{ fontSize: ".5rem" }}>Please enter a value between 1-5</p>
      )}
    </form>
  )
}

export default MealItemForm
