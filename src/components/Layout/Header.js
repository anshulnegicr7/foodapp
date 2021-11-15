import {Fragment} from 'react';
import mealsimage from '../../assets/meals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
          <header className={classes.header}>
              <h1>React meals</h1>
              <HeaderCartButton onClick={props.onShowCart}/>
          </header>
          <div className={classes['main-image']}>
            <img src={mealsimage} alt="FOOD ITEMS"/>
          </div>  
        </Fragment>
    )
}

export default Header
