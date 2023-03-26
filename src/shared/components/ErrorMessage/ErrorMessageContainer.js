import React from 'react';
import ErrorMessageComponent from './ErrorMessageComponent';

const ErrorMessageContainer = ({ errorText }) => {
    const refreshPage = () => window.location.reload(false);

    return (
        <ErrorMessageComponent
            errorText={errorText}
            refreshPage={refreshPage}
        />
    );
};

export default ErrorMessageContainer;
