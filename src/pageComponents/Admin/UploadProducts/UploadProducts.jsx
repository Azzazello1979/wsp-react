import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';

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
}));

export default function UploadProducts() {
    const classes = useStyles();

    const [category, setCategory] = useState('wines');
    const handleCategoryChange = e => {
        setCategory(e.target.value);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <form className={classes.form} noValidate>
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
                            />
                        </Grid>

                    </Grid>
                    <Button
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