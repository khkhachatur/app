import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux'

import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import ProdactCart from '../../components/ProductCart/ProductCart';
import SecondProductCart from '../../components/SecondProductCart/SecondProductCart'

import MainImage from '../../images/bkg.jpg';

import useStyles from './styles';

const Orders = ( { cart, secondCart } ) => {
  const classNames = useStyles();
  const [totalPrice, setTotalPrice] = useState(0)
  
  useEffect (() => {
    let price =0;
    let price2 =0

    cart.forEach(item =>{
      price += item.qty * item.price
    })
    secondCart.forEach(item =>{
      price2 += item.qty * item.secondPrice
    })

    setTotalPrice(price+=price2)
  }, [cart, secondCart, totalPrice, setTotalPrice])

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat`,
            }}>
          <Navigation
            title='Orders'
          />
          <dir className={classNames.menuList}>
            <div className={classNames.foodList}>
              <Link to='/food' style={{textDecoration: 'none'}}><h3 className={classNames.title}>Food</h3></Link>
              <ul className={classNames.list}>
                {cart.filter((item) => item.subVariant === 'food').map(item => (
                  <ProdactCart key ={item.id} itemData ={item}/>
                ))}
              </ul>
            </div>
            <div className={classNames.drinksList}>
              <Link to='/drinks' style={{textDecoration: 'none'}}><h3 className={classNames.title}>Drinks</h3></Link>
              <ul className={classNames.list}>
                {cart.filter((item) => item.subVariant === 'drinks').map(item => (
                  <ProdactCart key ={item.id} itemData ={item}/>
                ))}
                {secondCart.filter((item) => item.subVariant === 'drinks').map(item => (
                  <SecondProductCart key ={item.secondId} secondItemData ={item}/>
                ))}
              </ul>
            </div>
            <ul className={classNames.totalContainer}>
              <p className={classNames.total}>Total:</p>
              <p className={classNames.total}>{totalPrice}</p>
            </ul>
            <div className={classNames.buttonHolder}>
              <a href="/home"> <button className={classNames.reset}>reset</button></a>
            </div>
          </dir>
        </div>

      <Footer/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    cart: state.shop.cart,
    secondCart: state.shop.secondCart,

  }
}

export default connect(mapStateToProps)(Orders);
