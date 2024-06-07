import React, { useState, useEffect, createContext, useContext } from 'react';
import RippleToast from './RippleToast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (type, message, options = {}) => {
        setToasts([...toasts, { id: toastCounter++, type, message, options }]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    useEffect(() => {
        toasts.forEach((toast) => {
            if (toast.options.timeout) {
                setTimeout(() => {
                    removeToast(toast.id);
                }, toast.options.timeout);
            }
        });
    }, [toasts]);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <RippleToast key={toast.id} {...toast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export default ToastProvider;
