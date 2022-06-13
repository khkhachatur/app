import React, { useState } from 'react';

import { connect } from 'react-redux'

import Chevron from 'react-chevron'
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Prodact'
import Navigation from '../../components/Navigation/Navigation';

import MainImage from '../../images/bkg.jpg';

import useStyles from './styles';

const FoodPage = ({ products }) => {

  const classNames = useStyles();
  
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [switchToggle, setSwitchToggle] =useState(false);
  const [switchToggle1, setSwitchToggle1] =useState(false);
  const [switchToggle2, setSwitchToggle2] =useState(false);
  const [switchToggle3, setSwitchToggle3] =useState(false);
  const [switchToggle4, setSwitchToggle4] =useState(false);
  const [switchToggle5, setSwitchToggle5] =useState(false);

  const ToggleOnClick = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true)
    setOpen1(!open1)
  }
  const ToggleOnClick1 = () => {
    switchToggle1 ? setSwitchToggle1(false) : setSwitchToggle1(true)
    setOpen2(!open2)
  }
  const ToggleOnClick2 = () => {
    switchToggle2 ? setSwitchToggle2(false) : setSwitchToggle2(true)
    setOpen3(!open3)
  }
  const ToggleOnClick3 = () => {
    switchToggle3 ? setSwitchToggle3(false) : setSwitchToggle3(true)
    setOpen4(!open4)
  }
  const ToggleOnClick4 = () => {
    switchToggle4 ? setSwitchToggle4(false) : setSwitchToggle4(true)
    setOpen5(!open5)
  }
  const ToggleOnClick5 = () => {
    switchToggle5 ? setSwitchToggle5(false) : setSwitchToggle5(true)
    setOpen(!open)
  }
 
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat `,
            }}>
          <Navigation
            title='Food'
          />
          <div className={classNames.menuList}>
              <ul className={classNames.list}>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Soups</p>
                    <button onClick={ToggleOnClick} className={switchToggle ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open1 && 
                    <div>{products.filter((item) => item.variant === 'Soups').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle1 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Appetizers</p>
                    <button onClick={ToggleOnClick1} className={switchToggle1 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open2 && 
                    <div>{products.filter((item) => item.variant === 'Appetizers').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle2 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Salads</p>
                    <button onClick={ToggleOnClick2} className={switchToggle2 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open3 && 
                    <div>{products.filter((item) => item.variant === 'Salads').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle3 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Main Course</p>
                    <button onClick={ToggleOnClick3} className={switchToggle3 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open4 && 
                    <div>{products.filter((item) => item.variant === 'Main Course').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle4 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Sauces & Extras</p>
                    <button onClick={ToggleOnClick4} className={switchToggle4 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open5 && 
                    <div>{products.filter((item) => item.variant === 'Sauces & Extras').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle5 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Desert</p>
                    <button onClick={ToggleOnClick5} className={switchToggle5 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open && 
                    <div>{products.filter((item) => item.variant === 'Desert').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
              </ul>
          </div>
        </div>

      <Footer/>
      </div>
    </div>
  );
};

const mapStateProps = state =>{
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateProps)(FoodPage);

