import ProductThumb from '../../../reusableComponents/ProductThumb/ProductThumb';
import Filter from './../../../reusableComponents/Filter/Filter';
import classes from './ProductsListing.module.css';
import { useSelector } from 'react-redux';

const ProductsListing = () => {

    const products = useSelector(state => state.productsSlice.products);

    return (
        <div className={classes['products-listing-wrapper']}>
            <div className={classes['products-listing-filter']}>
                <Filter></Filter>
            </div>
            <div className={classes['products-listing-main']}>
                {products && products.map(p => <ProductThumb key={p._id} title={p.title}></ProductThumb>)}
            </div>
        </div>
    );

}

export default ProductsListing;