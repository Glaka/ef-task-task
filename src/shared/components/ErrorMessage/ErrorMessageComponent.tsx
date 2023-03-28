import React from 'react';
import './styles.scss';
import { ErrorMessageComponentProps } from './types';

const ErrorMessageComponent: React.FC<ErrorMessageComponentProps> = ({
    error,
    refreshPage,
}) => (
    <div className="error-block">
        <h4>Something goes wrong</h4>
        <p>{error.message}</p>
        <p onClick={refreshPage} className="reload-button">
            Try to reload page
        </p>
    </div>
);

export default ErrorMessageComponent;
