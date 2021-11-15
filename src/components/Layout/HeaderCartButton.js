import CartIcon from "../Cart/CartIcon"
import { useContext, useState,useEffect } from 'react'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'


const HeaderCartButton = (props) => {
    const [btnIsHighLight,setBtnIsHighLight] = useState(false);
    const cartctx = useContext(CartContext);
    const {items}=cartctx;
    
    const numberOfCartItems =items.reduce((curNum,item) => {
            return curNum + item.amount;
        },0);

    const btnClasses= `${classes.button} ${btnIsHighLight ? classes.bump:''}`;
    useEffect(()=>{
        if(cartctx.items.length===0)
        return;
        setBtnIsHighLight(true);
    },[items]);

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon /></span>
        <span>CART</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>);
};
export default HeaderCartButton;