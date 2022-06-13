import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import MainImage from '../../images/bkg.jpg';

import useStyles from './styles';

const HomePage = () => {

  const classNames = useStyles();
 
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat`,
            }}>
          <div className={classNames.descrition}>
            <h3 className={classNames.title}>The Beach</h3>
            <p className={classNames.text}>Menu</p>
            <div className={classNames.buttonHolder}>
              <Link to='/food'>
                <button className={classNames.button}>
                  Food
                </button></Link>
              <Link to='/drinks'>
                <button className={classnames(classNames.button, classNames.buttonPrimary)}>
                  Drinks
                </button>
              </Link>
            </div> 
          </div>   
        </div>

      </div>

    </div>
  );
};

export default HomePage;

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAnVv56ssukzAJVUPiJwiMHY2VDzfk7mMg")
// })(HomePage)
