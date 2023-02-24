import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './alerts.css';

export const AlertError = (message) => toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    className: 'alert-error',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
});

export const AlertSuccess = (message) => toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    className: 'alert-success',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
});

export const AlertPromise = (func, successMessage, errorMessage) => {
    toast.promise(
        func, {
            pending: {
                className: "alert-loading", 
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                render(){
                    return "Por favor, aguarde um momento!";
                }                 
            },
            success: {
                className: 'alert-success',
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                render({data}){
                    return successMessage? successMessage : data.message;
                },
            },
            error: {
                className: 'alert-error',
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                render({data}){
                    return errorMessage? errorMessage : data.message;
                }, 
            }
        }
    );
}