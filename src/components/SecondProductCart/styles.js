import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  dropDownItem:{
    display:'flex',
    borderBottom:'2px solid rgba(255, 255, 255)',
    border: 'rgba(255,255,255, 0.1)',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: '10px',
    justifyContent:'space-between',
    padding:'15px 5px'
  },
  dropDownDesc:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
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
 