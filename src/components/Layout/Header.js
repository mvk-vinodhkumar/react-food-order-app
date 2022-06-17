import { Fragment } from "react"
import classes from "./Header.module.css"
import bannerImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="delicious food on table" />
      </div>
    </Fragment>
  )
}

export default Header
