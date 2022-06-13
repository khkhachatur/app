import React, {useState} from 'react';

import { connect } from 'react-redux'

import { adjustQty, removeFromCart } from '../../actions/cartAction';

import useStyles from './styles';

const ProductCart = ({ itemData,  adjustQty, secondCart}) => {

  const classNames = useStyles();

  const [input, setInput] = useState(itemData.qty)

  const addQty = () => { 
    if(itemData.qty < 9){
    setInput(itemData.qty = itemData.qty + 1)
    adjustQty(itemData.id)
    }
  }

  const removeQty = () => { 
    if(itemData.qty > 0){
      setInput(itemData.qty = itemData.qty - 1)
      adjustQty(itemData.id)
    }
  }

  const onClickHolderPlus = () => {
    addQty()
    console.log('Plus value --> ??', secondCart);

  } 
  const onClickHolderMinus = () => {
    removeQty()
    console.log('Minus value --> ', itemData.qty);
  } 


  return(
  <>
      <div className={classNames.dropDownItem}>
        <div className={classNames.dropDownDesc}>
          <h4 className={classNames.dropDownTitle}>{itemData.title}</h4>
            <div className={classNames.counter}>
              <button onClick={onClickHolderMinus}  className={classNames.plusMinus}>-</button>
              <div>{input}</div>
              <button onClick={onClickHolderPlus} className={classNames.plusMinus}>+</button>
            </div>
            <p className={classNames.price}>{itemData.price}</p>
        </div>
        <p className={classNames.ingredients}>{itemData.ingredients}</p>
      </div>
    </>
  )

};

const mapStateToProps = state => {
  return{
    cart: state.shop.cart,
    secondCart: state.shop.secondCart
  }
}

const mapDispatchToProps = dispatch => {
  return{
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  }
} 

export default connect(mapStateToProps, mapDispatchToProps, null)(ProductCart);