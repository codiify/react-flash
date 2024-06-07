import React, { createContext, useContext, useState, useEffect } from 'react';
import RippleToast from './RippleToast';

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (type, message, options) => {
        const id = Date.now();
        setToasts([...toasts, { id, type, message, options }]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="toast-container">
                {toasts.map(toast => (
                    <RippleToast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export default ToastProvider;
