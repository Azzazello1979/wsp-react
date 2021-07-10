import ProductThumb from "../../reusableComponents/ProductThumb/ProductThumb";
import classes from './ProductsListing.module.css';
import { useSelector } from 'react-redux';

const ProductsListing = () => {

    const products = useSelector(state => state.productsSlice.products);
    console.log(products);

    return (
        <div className={classes['products-wrapper']}>
            {products && products.map(p => <ProductThumb key={p._id} title={p.title}></ProductThumb>)}
        </div>
    );

}

export default ProductsListing;