
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
    padding:'60px 30px 100px 30px',
    overflow:'auto',
    width:'100%',
    height:'90vh'
  },
  buttonHolder:{
    display:'flex',
    justifyContent:'end',
  },
  reset:{
    color:'#3C6A5A',
    fontSize:'18px',
    fontWeight:'500',
    margin:'0',
    background:'none',
    border:'none',
    borderBottom:'1px solid #3C6A5A',
    borderRadius:'5px',
    padding:'4px',
    cursor:'pointer'
  },
  list:{
    padding:'0',
    gap:'10px',
    display:'flex',
    flexDirection:'column',
  },
  title:{
    color:'#3C6A5A',
    fontFamily:'Playfair Display',
    fontSize:'18px',
    fontWeight:'500',
    margin:'0',
  },
  totalContainer:{
    display:'flex',
    justifyContent:'end',
    gap:'10px',
  },
  total:{
    color:'#3C6A5A',
    fontSize:'18px',
    fontWeight:'600',
    margin:'0',
  },
  dropDownItem:{
    display:'flex',
    flexDirection:'column',
    borderBottom:'2px solid rgba(255, 255, 255)',
    border: 'rgba(255,255,255, 0.1)',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    padding:'5px',
    borderRadius: '10px',
  },
  dropDownDesc:{
    display:'flex',
    alignItems:'center',
    gap:'20px'
  },
  dropDownSubDesc:{
    display:'flex',
    alignItems:'center',
    justifyContent:'end',
    gap:'20px',
  },
  dropDownTitle:{
    width:'200px',
    fontSize:'16px',
    fontWeight:'600',
    color:'#3C6A5A',
    margin:'0'
  },
  plus:{
    border:'none',
    background:'none',
  },
  counter:{
    display:'flex',
    color:'#3C6A5A',
    alignItems:'center',
  },
  plusMinus:{
    fontSize:'14px',
    fontWeight:'400',
    color:'#3C6A5A',
    background: 'none',
	  border: 'none'
  },
  price:{
    fontSize:'16px',
    fontWeight:'500',
    color:'#3C6A5A',
    margin:'0'
  },
  ingredients:{
    fontSize:'14px',
    color:'#3C6A5A',
    fontWeight:'400',
  },

  

}));

export default useStyles;
 