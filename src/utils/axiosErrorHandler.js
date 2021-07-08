export const axiosErrorHandler = (error) => {

    if (error.request) { // error with request
        console.log(error.request);

    } else if (error.response) { // error with response
        console.log(error.response);

    } else { // some other error
        console.log(error);
    }

};