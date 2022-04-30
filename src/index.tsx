import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, HttpLink, InMemoryCache, gql, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphql'
  })
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);
