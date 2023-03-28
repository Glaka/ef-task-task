import { ApolloError } from "@apollo/client";

export interface ErrorMessageContainerProps {
    error: ApolloError;
}

export interface ErrorMessageComponentProps extends ErrorMessageContainerProps {
    refreshPage: () => void;
}
