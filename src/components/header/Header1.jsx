import  { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [ 'AR','EN'];


const Header1=()=> {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null );
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event,index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      
        <Box  sx={{ backgroundColor:"#2B3445"}}>
          <Stack direction={"row"} alignItems={"centen"}>
<Typography
sx={{
  height:"20px",
  width:"50px", marginTop:"10px",
mr: "2px" ,p:"3p 1px",b:"5px", bgcolor: "#D23F57", borderRadius: "10px" ,fontsize: "5px", fontWeight: "bold", color:
"#fff"
}}
variant="body2">
HOT
</Typography>
<Typography
sx={{
  marginTop:"10px",
fontSize: "12px", fontweight: 300, color: "#fff",
}}
variant="body2">
Free Express Shipping
</Typography>
<Box flexGrow={1}/>

            <div  >
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
         
        >
          <LightModeOutlined sx={{
   color: "#fff"
}}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
          
        >
          <DarkModeOutlined />
        </IconButton >
      )}
           </div>
           <div><List
        component="nav"
        aria-label="Device settings"
        sx={{p:0,m:0}}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{ "§:hover" :{cursor:"pointer"}}}
        >
          <ListItemText
          sx={{ ".MuiTypography-root" :{fontSize:"11px"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"16px",
   color: "#fff"
}}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{ fontSize:"14px",p:"3px 10px",minHeight:"10px"}}
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu></div>
           <div>
           <TwitterIcon
sx={{margin:"5px",
fontSize: "20px", color: "#fff",
}}
/>
<FacebookIcon
sx={{margin:"5px",
fontsize: "10px", mx: 1, color: "#fff",
}}
/>
<InstagramIcon
sx={{
  margin:"5px",
fontSize: "20px", color: "#fff",
}}
/></div>
           </Stack>
        </Box  >
    );
}
  
  export default Header1;