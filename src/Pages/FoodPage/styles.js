
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    maxWidth: '412px',
    height: '100%',
    width: '100%',

  },
  mainImage: {
    height: '100vh',
    width: '100%',
    position: 'relative',
  },
  menuList:{
    overflow: 'auto',
    width: '100%',
    height: '95vh',
  },
  list:{
    padding:'50px 40px 80px 40px',
    listStyleType:'none',
  },
  menuItem:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  },
  menuItemTitle:{
    fontFamily: 'Playfair Display',
    fontSize:'30px',
    fontWeight:'500',
    color:'#3C6A5A',
    margin:'13.5px 0',
  },
  button:{
    background: 'none',
	  border: 'none',
    fontSize:'30px',
    color:'#3C6A5A',
  },
  buttonOrange:{
    background: 'none',
	  border: 'none',
    fontSize:'30px',
    color:'#D67E2D',
    transform: 'rotate(90deg)'
  },
  menuItemTitleOrange:{
    fontFamily: 'Playfair Display',
    fontSize:'30px',
    fontWeight:'500',
    margin:'13.5px 0',
    color:'#D67E2D',
  },

  
  

}));

export default useStyles;
