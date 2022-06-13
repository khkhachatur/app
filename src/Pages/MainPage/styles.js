
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
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    position: 'relative',
  },
  button:{
    background:'none',
    border:'3px solid #3C6A5A',
    padding:'20px 30px 15px 30px',
    filter: 'drop-shadow(0px 4px 4px rgba(120, 120, 106, 0.5))',
    borderRadius: '5px',
    fontFamily: 'Playfair Display',
    fontSize:'36px',
    fontWeight:'700',
    color:'#3C6A5A',
    '&:hover':{
      cursor:'pointer'
    },
  },

}));

export default useStyles;
 