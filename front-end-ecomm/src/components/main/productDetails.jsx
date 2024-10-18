/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const ProductDetails = () => {
  return (
    <Box sx={{display:"flex", alignItems:"center", alignContent:"space-between", gap:2.5 ,flexDirection:{xs:"column",sm:"row" }}}>
      <Box>
        <img width={300} height={350} src="src/img for Ecom/1 (6).jpg" alt="" />
      </Box>

      <Box sx={{textAlign:{xs:"center",sm:"left"}}}>

      <Typography variant="h5" >WOMEN'S FASHION</Typography>
<Typography my={0.4} fontSize={"22px"} color={"crimson"} >
$12.99
</Typography>
<Typography variant="body1">
Lizards are a widespread group of squamate reptiles, with over 6,000
species, ranging across all continents except Antarctica
</Typography>

<Stack sx={{justifyContent:{xs:"centr",sm:"left"}}} direction={"row"} gap={1}
>

{  [ "src/img for Ecom/1 (5).jpg","src/img for Ecom/1 (6).jpg","src/img for Ecom/100.jpg"].map((item)=>{
return(

<img style={{borderRadius:3,marginTop:10}} width={90} height={110} key={item} src={item} alt="" />
)

}        )      }

</Stack>


<Button 
sx={{ 
  mb: {xs:1,sm:0},
  mt:2,
  textTransform:"capitalize",}}
 variant="contained"
>
<
// @ts-ignore
AddShoppingCartIcon  sx={{ mr:2 }}
fontSise="small"/>
Buy now
</Button>




      </Box>
    </Box>
  );
};

export default ProductDetails;
