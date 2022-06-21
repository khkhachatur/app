import React from 'react';
import {useNavigate} from 'react-router-dom';
import Chevron from 'react-chevron'

import useStyles from './styles';

const Navigation = ({ title }) => {
  const navigate = useNavigate()

  const classNames = useStyles();
  return (
  <div className={classNames.nav}>
    <button onClick={() => navigate(-1)} style={{border:'none', background:'none', width:'24px', color:'rgb(214, 126, 45)', fontSize: '50px'}}>
    <Chevron direction={'left'}/>
    </button>
    <h3 className={classNames.title}>{title}</h3>
  </div>
  );
};

export default Navigation;
 