import React, { useEffect, useRef } from 'react';
import '../styles.css';

const RippleToast = ({ id, type, message, options, onClose }) => {
    const toastRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(onClose, options.timeout || 3000);
        return () => clearTimeout(timer);
    }, [onClose, options.timeout]);

    const handleMouseEnter = () => {
        clearTimeout(toastRef.current);
    };

    const handleMouseLeave = () => {
        toastRef.current = setTimeout(onClose, options.timeout || 3000);
    };

    return (
        <div
            className={`toast toast--${type}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClose}
        >
            {message}
            {options.progressBar && (
                <div
                    className="toast-progress"
                    style={{
                        '--progress-bar-color': options.progressBarColor || '#000',
                        animationDuration: `${options.timeout || 3000}ms`,
                    }}
                />
            )}
        </div>
    );
};

export default RippleToast;
