import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCheckCircle,
    faTimesCircle,
    faInfoCircle,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import '../toastr.css';

const Toastr = ({
                    type = 'default',
                    message = '',
                    onClose = () => {
                    },
                    color = '',
                    backgroundColor = '',
                    borderColor = '',
                    duration = 3000,
                    position = 'bottom-right'
                }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    const getIcon = (type) => {
        switch (type) {
            case 'success':
                return faCheckCircle;
            case 'error':
                return faTimesCircle;
            case 'info':
                return faInfoCircle;
            case 'warning':
                return faExclamationCircle;
            default:
                return faBell;
        }
    };

    const defaultColors = {
        default: {color: '#171717', backgroundColor: '#FFFFFF', borderColor: '#EDEDED', progressBarColor: '#171717'},
        success: {color: '#008A2E', backgroundColor: '#ECFDF3', borderColor: '#D3FDE5', progressBarColor: '#008A2E'},
        error: {color: '#E60000', backgroundColor: '#FFF0F0', borderColor: '#FFE0E1', progressBarColor: '#E60000'},
        info: {color: '#0973DC', backgroundColor: '#F0F8FF', borderColor: '#D3E0FD', progressBarColor: '#0973DC'},
        warning: {color: '#DC7609', backgroundColor: '#FFFCF0', borderColor: '#FDF5D3', progressBarColor: '#DC7609'},
    };

    const defaultMessages = {
        default: "This is a default message.",
        success: "Operation completed successfully!",
        error: "An error occurred!",
        info: "Here is some information.",
        warning: "Warning! Please take caution."
    };

    const appliedMessage = message || defaultMessages[type];
    const appliedColor = color || defaultColors[type].color;
    const appliedBackgroundColor = backgroundColor || defaultColors[type].backgroundColor;
    const appliedBorderColor = borderColor || defaultColors[type].borderColor;

    return (
        <div className={`toast toast-${type} toast-${position}`}
             style={{
                 'color': appliedColor,
                 'backgroundColor': appliedBackgroundColor,
                 'borderColor': appliedBorderColor
             }}>
            <FontAwesomeIcon icon={getIcon(type)} className="toast-icon"/>
            {appliedMessage}
        </div>
    );
};

Toastr.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'error', 'info', 'warning']),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    position: PropTypes.oneOf(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right',])
};

export {Toastr};
