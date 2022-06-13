import React, { useState } from 'react';

import { connect } from 'react-redux'

import { addToCart, adjustQty, removeFromCart, addToCartSecond, adjustSecondQty } from '../../actions/cartAction';

import plus from '../../images/interface/plus.svg';

import bottle from '../../images/interface/wine-bottle.svg';

import useStyles from './styles';


const Product = ({ product, addToCart,  adjustQty, removeFromCart, addToCartSecond, secondCart }) => {

  const classNames = useStyles();
  
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState(product.counter)

  const addQty = () => { 
    if(product.counter < 9){
    setInput(product.counter = +product.counter + 1)
    adjustQty(product.id)
    addToCart(product.id)
    }
  }

  const removeQty = () => { 
    if(product.counter > 0){
      setInput(product.counter = +product.counter - 1)
      adjustQty(product.id)
      removeFromCart(product.id)
    }
  }
  
  const onClickHolderPlus = () => {
    addQty()
    console.log('Plus value --> ', product.counter);
  } 
  const onClickHolderMinus = () => {
    removeQty()
    console.log('Minus value --> ', product.counter);
  } 

  const [input1, setInput1] = useState(product.secondCounter)

  const addQty1 = () => { 
    if(product.secondCounter < 9){
    setInput1(product.secondCounter = +product.secondCounter + 1)
    adjustSecondQty(product.secondId)
    addToCartSecond(product.secondId)
    console.log("plus bottle -->", secondCart)

    }
  }

  const removeQty1 = () => { 
    if(product.secondCounter > 0){
      setInput1(product.secondCounter = +product.secondCounter - 1)
      adjustSecondQty(product.secondId)
      removeFromCart(product.secondId)
    }
  }
  
  const onClickHolderPlus1 = () => {
    addQty1()
  } 
  const onClickHolderMinus1 = () => {
    removeQty1()
  }

  return (
    <>
        <div className={classNames.dropDownItem}>
            <div className={classNames.dropDownDesc}>
                <h4 className={classNames.dropDownTitle}>{product.title}</h4>
                <button onClick={setOpen} className={classNames.plus}><img src={plus} alt="" /></button>
                    {open &&
                        <div className={classNames.counter}>
                            <button onClick ={onClickHolderMinus} className={classNames.plusMinus}>-</button>
                            <div>{input}</div>
                            <button 
                              onClick ={onClickHolderPlus}
                              className={classNames.plusMinus}
                            >+</button>
                        </div>}
                    <p className={classNames.price}>{product.price}</p>
            </div>
              {product?.secondPrice &&  (
                <div className={classNames.dropDownSubDesc}>
                  <img src={bottle} alt="not found" />
                    <div className={classNames.counter} data-id={product.secondId}>
                      <button onClick={onClickHolderMinus1} className={classNames.plusMinus}>-</button>
                      <div>{input1}</div>
                      <button onClick={onClickHolderPlus1} className={classNames.plusMinus}>+</button>
                  </div>
                  <p className={classNames.price}>{product.secondPrice}</p>
                </div>
              )}
              <p className={classNames.ingredients}>{product.ingredients}</p>
        </div>
    </>
  );
};

const mapStateToProps = state => {
  return{
    cart: state.shop.cart,
    secondCart: state.shop.secondCart
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    addToCartSecond: (secondId) => dispatch(addToCartSecond(secondId)),
    adjustSecondQty: (secondId, value) => dispatch(adjustSecondQty(secondId, value)),
  }
} 

export default connect(mapStateToProps, mapDispatchToProps, null)(Product);
 
