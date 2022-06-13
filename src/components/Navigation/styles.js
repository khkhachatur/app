import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    nav:{
        display:'grid',
        gridTemplateColumns:'1fr 2fr',
        alignItems:'center',
        paddingTop:'30px',
      },
      title:{
        fontSize:'48px',
        fontFamily: 'Playfair Display',
        fontStyle:'italic',
        color:'#3C6A5A',
        margin:'0',
      },
}));

export default useStyles;
 