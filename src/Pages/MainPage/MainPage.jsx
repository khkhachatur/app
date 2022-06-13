import React from 'react';
import { Link } from 'react-router-dom';

import MainImage from '../../images/bkg.jpg';
import beach from '../../images/interface/g10.svg';

import useStyles from './styles';

const MainPage = () => {

  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat`,
            }}>
              <Link to='/home'>
                <button className={classNames.button}>
                  <img src={beach} alt='beach' />
                </button></Link>
        </div>

      </div>

    </div>
  );
};

export default MainPage;

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAnVv56ssukzAJVUPiJwiMHY2VDzfk7mMg")
// })(HomePage)
