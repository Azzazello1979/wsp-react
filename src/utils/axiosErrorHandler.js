export const axiosErrorHandler = (error) => {

    if (error.request) { // error with request
        //console.log(error.request);
        const errorCode = JSON.parse(error.request.responseText).message;
        return errorCode;

    } else if (error.response) { // error with response
        //console.log(error.response);

        const errorCode = JSON.parse(error.response.responseText).message;
        return errorCode;

    } else { // some other error
        console.log(error);
    }

};

// open modal and feed in error info