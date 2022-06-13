import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footerHolder: {
    background: '#ffffff',
    width: '100%',
    maxWidth:'412px',
    position:'fixed',
    bottom:'0',
    display:'flex',
    justifyContent:'center',
  },
  footer: {
    display:'flex',
    justifyContent:'space-between'
  },
  button:{
    padding:'30px 70px',
    border:'none',
    background:'none',
  },
}));

export default useStyles;
 