import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import home from '../../images/interface/home.svg';
import order from '../../images/interface/order.svg';

import useStyles from './styles';

import {connect} from 'react-redux'
import { useEffect } from 'react';

const Footer = ({ cart, secondCart }) => {

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count =0;
    let count1 =0;
    cart.forEach(item => {
      count += item.qty
    })
    secondCart.forEach(item => {
      count1 += item.qty
    })

    setCartCount(count+=count1);
  },[cart, secondCart, cartCount])

  const classNames = useStyles();

  return (
    <div className={classNames.footerHolder}>
      <footer className={classNames.footer}>
        <Link to='/home'>
          <button className={classNames.button} style={{background: `url(${home}) center  no-repeat `,}}></button>
        </Link>
        <Link to='/orders'>
          <button className={classNames.button} style={{ background: `url(${order}) center  no-repeat `,}}>
          <p style={{margin: '0',position:'absolute', display:'flex',top:'0', right:'105px', background:'#D67E2D', padding:'4px 7px', borderRadius:'15px', color:'#ffffff'}}>
            {cartCount}
            </p>
          </button>
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    secondCart: state.shop.secondCart,
  }
}

export default connect(mapStateToProps)(Footer);
 