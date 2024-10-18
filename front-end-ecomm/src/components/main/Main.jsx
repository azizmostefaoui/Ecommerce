import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ProductDetails from "./productDetails";

const logo='data:image/jpeg;base64,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';
// Define constants for images
const logoo='data:image/jpeg;base64,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';
const logooo='data:image/jpeg;base64,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';


// بيانات المنتجات الثابتة
const products = [
  {
    id: 1,
    title: "Men Product 1",
    price: 29.99,
    description: "Description for Men Product 1",
    rating: 4.5,
    img:logo, // Using const for image
    category: "men",
  },
  {
    id: 2,
    title: "Women Product 1",
    price: 19.99,
    description: "Description for Women Product 1",
    rating: 4.0,
    img:logoo, // Using const for image
    category: "women",
  },
  {
    id: 3,
    title: "Unisex Product 1",
    price: 39.99,
    description: "Description for Unisex Product 1",
    rating: 5.0,
    img:logooo, // Using const for image
    category: "all",
  },
];

const Main = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [myData, setData] = useState("all");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // تصفية المنتجات بناءً على الفئة المحددة
  const filteredProducts =
    myData === "men"
      ? products.filter((product) => product.category === "men")
      : myData === "women"
      ? products.filter((product) => product.category === "women")
      : products;

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Select Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={(event, newValue) => setData(newValue)}
          aria-label="product category"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              color: "#e94560",
              background: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            value="all"
            aria-label="all products"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            value="men"
            aria-label="men category"
          >
            MEN category
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            value="women"
            aria-label="women category"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 333,
              mt: 6,
              ":hover .MuiCardMedia-root": {
                rotate: "1deg",
                scale: "1.1",
                transition: "0.35s",
              },
            }}
          >
            <CardMedia
              sx={{ height: 277 }}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  ${item.price}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{ textTransform: "capitalize" }}
                size="small"
              >
                <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="large" />
                Add to cart
              </Button>

              <Rating
                precision={0.5}
                name="read-only"
                value={item.rating}
                readOnly
              />
            </CardActions>
          </Card>
        ))}
      </Stack>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", md: 800 },
            height: "350px",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        <ProductDetails />
      </Dialog>
    </Container>
  );
};

export default Main;
