import React from 'react';
import './styles.scss';

const ErrorMessageComponent = ({ errorText, refreshPage }) => (
    <div className="error-block">
        <h4>Something goes wrong</h4>
        <p>{errorText}</p>
        <p onClick={refreshPage} className="reload-button">
            Try to reload page
        </p>
    </div>
);

export default ErrorMessageComponent;
