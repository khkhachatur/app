import React, { useState } from 'react';

import { connect } from 'react-redux'

import Chevron from 'react-chevron'
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Prodact'
import Navigation from '../../components/Navigation/Navigation';

import MainImage from '../../images/bkg.jpg';

import useStyles from './styles';

const DrinksPage = ( { products } ) => {

  const classNames = useStyles();
  
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);

  const [switchToggle, setSwitchToggle] =useState(false);
  const [switchToggle1, setSwitchToggle1] =useState(false);
  const [switchToggle2, setSwitchToggle2] =useState(false);
  const [switchToggle3, setSwitchToggle3] =useState(false);
  const [switchToggle4, setSwitchToggle4] =useState(false);
  const [switchToggle5, setSwitchToggle5] =useState(false);
  const [switchToggle6, setSwitchToggle6] =useState(false);
  const [switchToggle7, setSwitchToggle7] =useState(false);
  const [switchToggle8, setSwitchToggle8] =useState(false);
  const [switchToggle9, setSwitchToggle9] =useState(false);
  const [switchToggle10, setSwitchToggle10] =useState(false);
  const [switchToggle11, setSwitchToggle11] =useState(false);
  const [switchToggle12, setSwitchToggle12] =useState(false);
  const [switchToggle13, setSwitchToggle13] =useState(false);
  const [switchToggle14, setSwitchToggle14] =useState(false);

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
    setOpen6(!open6)
  }
  const ToggleOnClick6 = () => {
    switchToggle6 ? setSwitchToggle6(false) : setSwitchToggle6(true)
    setOpen7(!open7)
  }
  const ToggleOnClick7 = () => {
    switchToggle7 ? setSwitchToggle7(false) : setSwitchToggle7(true)
    setOpen8(!open8)
  }
  const ToggleOnClick8 = () => {
    switchToggle8 ? setSwitchToggle8(false) : setSwitchToggle8(true)
    setOpen9(!open9)
  }
  const ToggleOnClick9 = () => {
    switchToggle9 ? setSwitchToggle9(false) : setSwitchToggle9(true)
    setOpen10(!open10)
  }
  const ToggleOnClick10 = () => {
    switchToggle10 ? setSwitchToggle10(false) : setSwitchToggle10(true)
    setOpen11(!open11)
  }
  const ToggleOnClick11 = () => {
    switchToggle11 ? setSwitchToggle11(false) : setSwitchToggle11(true)
    setOpen12(!open12)
  }
  const ToggleOnClick12 = () => {
    switchToggle12 ? setSwitchToggle12(false) : setSwitchToggle12(true)
    setOpen13(!open13)
  }
  const ToggleOnClick13 = () => {
    switchToggle13 ? setSwitchToggle13(false) : setSwitchToggle13(true)
    setOpen14(!open13)
  }
  const ToggleOnClick14 = () => {
    switchToggle14 ? setSwitchToggle14(false) : setSwitchToggle14(true)
    setOpen(!open)
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat`,
            }}>
          <Navigation
            title='Drinks'
          />
          <div className={classNames.menuList}>
              <ul className={classNames.list}>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Cocktails</p>
                    <button onClick={ToggleOnClick} className={switchToggle ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open1 && 
                    <div>{products.filter((item) => item.variant === 'Cocktails').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle1 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Whiskey</p>
                    <button onClick={ToggleOnClick1} className={switchToggle1 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open2 && 
                    <div>{products.filter((item) => item.variant === 'Whiskey').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle2 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Rum</p>
                    <button onClick={ToggleOnClick2} className={switchToggle2 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open3 && 
                    <div>{products.filter((item) => item.variant === 'Rum').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle3 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Gin</p>
                    <button onClick={ToggleOnClick3} className={switchToggle3 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                
                  </div>
                  {open4 && 
                    <div>{products.filter((item) => item.variant === 'Gin').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle4 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Vodka</p>
                    <button onClick={ToggleOnClick4} className={switchToggle4 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                 
                  </div>
                  {open5 && 
                    <div>{products.filter((item) => item.variant === 'Vodka').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={switchToggle5 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Tequila</p>
                    <button onClick={ToggleOnClick5} className={switchToggle5 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                 
                  </div>
                  {open6 && 
                    <div>{products.filter((item) => item.variant === 'Tequila').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle6 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Brandy & Cognac</p>
                    <button onClick={ToggleOnClick6} className={switchToggle6 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                 </div>
                  {open7 && 
                    <div>{products.filter((item) => item.variant === 'Brandy & Cognac').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle7 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Liqueur & Bitters</p>
                    <button onClick={ToggleOnClick7} className={switchToggle7 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                 </div>
                  {open8 && 
                    <div>{products.filter((item) => item.variant === 'Liqueur & Bitters').map(product => (
                      <Product key={product.id} product = {product}/>
                      ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle14 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Champagne & Sparkling Wine</p>
                    <button onClick={ToggleOnClick14} className={switchToggle14 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                </div>
                  {open && 
                    <div>{products.filter((item) => item.variant === 'Champagne & Sparkling Wine').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle8 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Wine</p>
                    <button onClick={ToggleOnClick8} className={switchToggle8 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>                 </div>
                  {open9 && 
                    <div>{products.filter((item) => item.variant === 'Wine').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle9 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Beer</p>
                    <button onClick={ToggleOnClick9} className={switchToggle9 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open10 && 
                    <div>{products.filter((item) => item.variant === 'Beer').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle10 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Soft Drinks</p>
                    <button onClick={ToggleOnClick10} className={switchToggle10 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open11 && 
                    <div>{products.filter((item) => item.variant === 'Soft Drinks').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle11 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Mocktails</p>
                    <button onClick={ToggleOnClick11} className={switchToggle11 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open12 && 
                    <div>{products.filter((item) => item.variant === 'Mocktails').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle12 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Tea & Coffee</p>
                    <button onClick={ToggleOnClick12} className={switchToggle12 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open13 && 
                    <div>{products.filter((item) => item.variant === 'Tea & Coffee').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                  <p className={switchToggle13 ? classNames.menuItemTitleOrange :  classNames.menuItemTitle}>Snacks</p>
                    <button onClick={ToggleOnClick13} className={switchToggle13 ? classNames.buttonOrange :  classNames.button} ><Chevron/></button>
                  </div>
                  {open14 && 
                    <div>{products.filter((item) => item.variant === 'Snacks').map(product => (
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

export default connect(mapStateProps)(DrinksPage);
