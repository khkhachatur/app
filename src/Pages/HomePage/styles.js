
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
  descrition:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontFamily: 'Playfair Display',
    fontStyle:'italic',
    fontSize:'48px',
    fontWeight:'400',
    color:'#3C6A5A',
    margin:'0',
    paddingBottom:'30px',
    paddingTop:'60px',
  },
  text:{
    fontFamily: 'Playfair Display',
    fontStyle:'italic',
    fontSize:'36px',
    fontWeight:'500',
    color:'#3C6A5A',
    margin:'0',
    paddingBottom:'150px'

  },
  buttonHolder:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'30px'
  },
  button:{
    background:'none',
    border:'3px solid #3C6A5A',
    padding:'20px 70px',
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
    buttonPrimary:{
      padding:'20px 53px',
    },

}));

export default useStyles;
 