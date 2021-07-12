import classes from './UploadProducts.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const UploadProducts = () => {
    return (
        <div className={classes['upload-products-wrapper']}>
            <form className={classes['upload-products-form']}>

                <div className={classes['form-control']}><TextField id="title" label="Title" variant="outlined" classes={{ root: classes['input'] }} /></div>

                {/* CATEGORY - DROPDOWN */}

                <div className={classes['form-control']}><TextField id="subheader" label="Subheader" variant="outlined" classes={{ root: classes['input'] }} /></div>

                {/* PRICE */}

                <div className={classes['form-control']}><TextField id="description" label="Description" variant="outlined" multiline rowsMax={10} classes={{ root: classes['input'] }} /></div>

                <input accept="image/*" id="file-pick" type="file" hidden />
                <div className={classes['form-control']}><label htmlFor="file-pick">
                    <Button variant="contained" color="primary" component="span">
                        Select image
                    </Button>
                </label></div>

                <div className={classes['form-control']}><Button variant="contained" color="secondary" startIcon={<CloudUploadIcon />} >Upload</Button></div>

            </form>
        </div>
    );
};

export default UploadProducts;