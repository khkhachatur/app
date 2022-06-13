import React, {useState} from 'react';

import { connect } from 'react-redux'

import { removeFromCart, addToCartSecond, adjustSecondQty } from '../../actions/cartAction';

import useStyles from './styles';

const SecondProductCart = ({ secondItemData, adjustSecondQty, secondCart}) => {

  const classNames = useStyles();

  const [input, setInput] = useState(secondItemData.qty)

  const addQty = () => { 
    if(secondItemData.qty < 9){
    setInput(secondItemData.qty = +secondItemData.qty + 1)
    adjustSecondQty(secondItemData.secondId)
    }
  }

  const removeQty = () => { 
    if(secondItemData.qty > 0){
      setInput(secondItemData.qty = +secondItemData.qty - 1)
      adjustSecondQty(secondItemData.secondId)
    }
  }
  
  const onClickHolderPlus = () => {
    addQty()
    console.log("plus bottle -->", secondCart)
  } 
  const onClickHolderMinus = () => {
    removeQty()
  }

  return(
    <div  className={classNames.dropDownItem}>
      <h1 className={classNames.dropDownTitle}>{secondItemData.title} bottle</h1>
      <div className={classNames.dropDownSubDesc}>
        <div className={classNames.counter} data-id={secondItemData.secondId}>
          <button onClick={onClickHolderMinus} className={classNames.plusMinus}>-</button>
          <div>{input}</div>
          <button onClick={onClickHolderPlus} className={classNames.plusMinus}>+</button>
        </div>
        <p className={classNames.price}>{secondItemData.secondPrice}</p>
      </div> 
    </div>
  )

};

const mapStateToProps = state => {
  return{
    secondCart: state.shop.secondCart
  }
}

const mapDispatchToProps = dispatch => {
  return{
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCartSecond: (secondId) => dispatch(addToCartSecond(secondId)),
    adjustSecondQty: (secondId, value1) => dispatch(adjustSecondQty(secondId, value1)),
  }
} 

export default connect(mapStateToProps, mapDispatchToProps, null)(SecondProductCart);