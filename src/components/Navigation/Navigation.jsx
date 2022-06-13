import React from 'react';
import {useNavigate} from 'react-router-dom';

import back from '../../images/interface/orange<.svg';

import useStyles from './styles';

const Navigation = ({ title }) => {
  const navigate = useNavigate()

  const classNames = useStyles();
  return (
  <div className={classNames.nav}>
    <button onClick={() => navigate(-1)} style={{border:'none', background:'none', width:'24px'}}>
      <img className={classNames.back} src={back} alt="<< not found" />
    </button>
    <h3 className={classNames.title}>{title}</h3>
  </div>
  );
};

export default Navigation;
 