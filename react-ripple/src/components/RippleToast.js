import React, { useEffect, useState } from 'react';
import './RippleToast.css'; // Import your styles

let toastCounter = 0;

const RippleToast = ({ type, message, options }) => {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        let interval;
        if (options.timeout) {
            const duration = options.timeout / 100;
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev <= 0) {
                        clearInterval(interval);
                        setVisible(false);
                    }
                    return prev - 1;
                });
            }, duration);
        }

        return () => {
            clearInterval(interval);
        };
    }, [options.timeout]);

    const handleMouseEnter = () => {
        clearInterval(interval);
    };

    const handleMouseLeave = () => {
        setVisible(true);
    };

    const handleClick = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className={`toast toast--${type}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                animationDuration: options.animationSpeed || '0.5s',
                backgroundColor: options.backgroundColor,
                color: options.color,
                borderColor: options.borderColor,
            }}
        >
            {options.icon && <i className={`fas ${getIconClass(type)}`}></i>}
            <span>{message}</span>
            <div
                className="toast-progress"
                style={{
                    width: `${progress}%`,
                    backgroundColor: options.progressBarColor || 'default',
                }}
            ></div>
        </div>
    );
};

const getIconClass = (type) => {
    switch (type) {
        case 'success':
            return 'fa-check-circle';
        case 'error':
            return 'fa-times-circle';
        case 'info':
            return 'fa-info-circle';
        case 'warning':
            return 'fa-exclamation-circle';
        default:
            return 'fa-bell';
    }
};

export default RippleToast;
