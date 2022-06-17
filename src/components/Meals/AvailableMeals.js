import Card from "../UI/Card"
import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem"

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Chettinad",
    description:
      "This South Indian dish uses a variety of spices, including fennel, kalpasi, bay leaf, cumin, tamarind and turmeric.",
    price: 300,
  },
  {
    id: "m2",
    name: "Masala Dosa",
    description:
      "A thin crepe made with fermented rice batter. The crepe is stuffed with lightly cooked potatoes, coriander leaves, onion, and spices.",
    price: 65,
  },
  {
    id: "m3",
    name: "Uthappam",
    description:
      "A South Indian pancake. The dish is prepared with rice and an urad daal batter. ",
    price: 150,
  },
  {
    id: "m4",
    name: "Hyderabadi Biryani",
    description:
      "This exotic Pulao style cooked non-veg rice recipe will offer you a taste of paradise.",
    price: 225,
  },
]
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    )
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
