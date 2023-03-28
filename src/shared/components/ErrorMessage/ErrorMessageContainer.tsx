import React from 'react';
import ErrorMessageComponent from './ErrorMessageComponent';
import { ErrorMessageContainerProps } from './types';

const ErrorMessageContainer = ({ error }: ErrorMessageContainerProps) => {
    const refreshPage = () => window.location.reload();

    return <ErrorMessageComponent error={error} refreshPage={refreshPage} />;
};

export default ErrorMessageContainer;
