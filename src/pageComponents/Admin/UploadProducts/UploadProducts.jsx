import mclasses from './UploadProducts.module.css';
import useInput from './../../../customHooks/use-input';

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import { useState, useRef } from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

// bring this in from db--> store later
const categories = [
    'wines', 'books', 'board-games', 'jewellery', 'computer'
];

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    filepicker: {
        color: 'green'
    },
}));

export default function UploadProducts() {

    const classes = useStyles();

    const [category, setCategory] = useState('wines');
    const handleCategoryChange = e => {
        setCategory(e.target.value);
    };

    const [imageSelected, setImageSelected] = useState(false);

    const imagePickerRef = useRef();

    const {
        value: titleValue,
        hasError: titleHasError,
        inputChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: titleReset
    } = useInput(input => input.length > 5);

    const {
        value: subheaderValue,
        hasError: subheaderHasError,
        inputChangeHandler: subheaderChangeHandler,
        inputBlurHandler: subheaderBlurHandler,
        reset: subheaderReset
    } = useInput(input => input.length > 5);

    const {
        value: priceValue,
        hasError: priceHasError,
        inputChangeHandler: priceChangeHandler,
        inputBlurHandler: priceBlurHandler,
        reset: priceReset
    } = useInput(input => input);

    const {
        value: descriptionValue,
        hasError: descriptionHasError,
        inputChangeHandler: descriptionChangeHandler,
        inputBlurHandler: descriptionBlurHandler,
        reset: descriptionReset
    } = useInput(input => input.length > 150);

    const handleSubmit = e => {
        e.preventDefault();

        // send to backend
        console.log({
            title: titleValue,
            category: category,
            subheader: subheaderValue,
            price: priceValue,
            description: descriptionValue,
            imageUrl: imagePickerRef.current.value,
        });

        // reset inputs
        titleReset();
        setCategory('wines');
        subheaderReset();
        priceReset();
        descriptionReset();
        setImageSelected(false);
    };

    const handleImagePickerChange = () => {
        imagePickerRef.current.value ? setImageSelected(true) : setImageSelected(false)
    };

    const formIsValid = !titleHasError && !subheaderHasError && !priceHasError && !descriptionHasError && imageSelected;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        {/* TITLE */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                id="title"
                                name="title"
                                label="Title"
                                required
                                fullWidth
                                autoFocus
                                value={titleValue}
                                onChange={titleChangeHandler}
                                onBlur={titleBlurHandler}
                                helperText={titleHasError && 'Title length needs to be at least 6 characters!'}
                            />
                        </Grid>

                        {/* CATEGORY */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                id="category"
                                name="category"
                                label="Category"
                                required
                                fullWidth
                                select
                                value={category}
                                onChange={handleCategoryChange}
                            >
                                {categories.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
                            </TextField>
                        </Grid>

                        {/* SUBHEADER */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                id="subheader"
                                name="subheader"
                                label="Subheader"
                                required
                                fullWidth
                                value={subheaderValue}
                                onChange={subheaderChangeHandler}
                                onBlur={subheaderBlurHandler}
                                helperText={subheaderHasError && 'Subheader length needs to be at least 6 characters!'}
                            />
                        </Grid>

                        {/* PRICE */}
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                variant="outlined"
                                id="price"
                                name="price"
                                label="price"
                                required
                                fullWidth
                                value={priceValue}
                                onChange={priceChangeHandler}
                                onBlur={priceBlurHandler}
                                helperText={priceHasError && 'Please enter price!'}
                            />
                        </Grid>

                        {/* DESCRIPTION */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                id="description"
                                name="description"
                                label="description"
                                required
                                fullWidth
                                multiline
                                rows="10"
                                value={descriptionValue}
                                onChange={descriptionChangeHandler}
                                onBlur={descriptionBlurHandler}
                                helperText={descriptionHasError && 'Description has to be minimum 150 chars long!'}
                            />
                        </Grid>

                        {/* FILE PICKER */}
                        <Grid item xs={12}>
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                id="filepicker"
                                ref={imagePickerRef}
                                onChange={handleImagePickerChange}
                            />
                            <label htmlFor="filepicker">
                                <Button
                                    disableElevation
                                    variant="contained"
                                    component="span"
                                    startIcon={<CameraAltIcon />}
                                    classes={{ root: mclasses.root }} >
                                    Pick Image
                                </Button>
                            </label>
                        </Grid>

                    </Grid>
                    <Button
                        disabled={!formIsValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Upload
                    </Button>

                </form>
            </div>

        </Container>
    );
}