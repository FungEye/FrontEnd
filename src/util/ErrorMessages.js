
const errorMessages = {
    err400: "400: That looks like a bad request. Are you sure all of the information you're sending is correct? Otherwise, contact the FrontEnd team.",
    err401: "401: It seems you are unauthorized. Have you logged in?",
    err403: "403: It seems you have been forbidden from accessing this resource. Are you logged in with the right account?",
    err500: "500: Something went wrong in the server side. Please contact the backend team or try again later.",
    errBefore: "Something went wrong in the request before it could reach the server. Check the URL of your request, try to login again, or verify your internet connection."
}

function setErrMsg(setErrorFunction, code) {
    switch (code) {
        case 400:
            setErrorFunction(errorMessages.err400);
            break;
        case 401:
            setErrorFunction(errorMessages.err401);
            break;
        case 403:
            setErrorFunction(errorMessages.err403);
            break;
        case 500:
            setErrorFunction(errorMessages.err500);
            break;
        default:
            break;
    }
}

export { errorMessages, setErrMsg }
