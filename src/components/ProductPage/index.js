import React, { Component }  from 'react';
import '../../index.scss';
import Navbar from '../Navbar';
import FloatCart from '../FloatCart';
import FloatSavedItems from '../FloatSavedItems';
import { addProductToSaved } from '../../services/saved/actions';
import { addProductToCart } from '../../services/cart/actions';
import Spinner from '../Spinner';
import { useFirestoreConnect} from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { formatPrice } from '../../services/util';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from "@material-ui/core";
import { ThemeProvider , makeStyles} from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorder  from '@material-ui/icons/FavoriteBorder';
import  theme  from "./theme";




export default function productPage({match :{params :{id}}}){

    useFirestoreConnect([
        { collection: `products`, doc: id, storeAs: 'product' }
    ]);

    const product = useSelector(({ firestore: { ordered } }) => ordered.products && ordered.products[0]);
    console.log(product)

    if (!product) return <Spinner/>;
    let formattedPrice = formatPrice(product.price, product.currencyId);

    return (
        <React.Fragment> 
            <div className="App">
            <Navbar/>
            <main>
            <ThemeProvider theme={theme}>
             <Grid container spacing={10}>
                <Grid item xs={6}>
                <img width="100%" hieght="100%" 
             src={require(`../../static/products/${product.sku}_1.jpg`)}
             alt={product.title}
              />
                 </Grid>
                <Grid item xs={4}  container direction="column" spacing={5}>
                    <Typography gutterBottom={true} variant="h2">
                        {product.title}
                    </Typography>
                    <Typography  gutterBottom={true} variant="body1">
                        {product.description}
                    </Typography>
                    <Typography  gutterBottom={true} variant="h6">Season: 
                        {product.season}
                    </Typography>
                    <Typography  gutterBottom={true} variant="h6">Style: 
                        {product.style}
                    </Typography>
                    <Typography  gutterBottom={true} variant = "h4" >
                    <small>{product.currencyFormat}</small>
                    <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                    <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                 </Typography>
                 <FormControl margin="normal">
                 <InputLabel id="demo-mutiple-sizes-label">Sizes</InputLabel>
                 <Select
                   labelId="demo-mutiple-sizes-label"
                  id="demo-mutiple-sizes"
                  input={<Input />}>
                 {product.availableSizes.map((p) => (
                 <MenuItem key={p} value={p} >
                     {p}
                  </MenuItem>
                 ))}
                 </Select>
                 </FormControl>

                 <FormControl margin="normal" >
                 <InputLabel id="demo-mutiple-colors-label">Colors</InputLabel>
                 <Select 
                  labelId="demo-mutiple-colors-label"
                  id="demo-mutiple-colors"
                  input={<Input />}
                  >
                 {product.color.map((p) => (
                 <MenuItem key={p} value={p} >
                     {p}
                  </MenuItem>
                 ))}
                 </Select>
                 
                 </FormControl>

                 <Button size="large" variant="text" fullWidth={true} endIcon={ <AddShoppingCartIcon />} onClick={() => addProductToCart(product)} data-sku={product.sku}>Add to Cart</Button>
                 <Button size="large" variant="text" fullWidth={true} endIcon={<FavoriteBorder/>}  onClick={() => addProductToSaved(product)} data-sku={product.sku}>Add to favorite</Button>
                
                 </Grid>
                 </Grid>
                 </ThemeProvider>
                 </main>
                 <FloatSavedItems />
                 <FloatCart />
                </div>
            </React.Fragment>
        );
   
}
productPage.propType = {
    firestore: PropTypes.object.isRequired
}