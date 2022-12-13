import "./css/index.css";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import LandingPage from "./components/pages/LandingPage";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // this calls on the components
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <LandingPage />
      </ApolloProvider>
    </div>
  );
}

export default App;
