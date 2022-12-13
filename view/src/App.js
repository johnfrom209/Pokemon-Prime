import "./css/index.css";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import LandingPage from "./components/pages/LandingPage";

// Construct our main GraphQL API endpoint
const httpLink = new createHttpLink({
  uri: "/graphql",
  //cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
