import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './api/client';
import Root from './routes';

const App = () => (
    <div className="App">
        <ApolloProvider client={client}>
            <Root />
        </ApolloProvider>
    </div>
);

export default App;
