import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import * as FullStory from "@fullstory/browser";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import store from "./store";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalContextProvider } from "./context/ModalContext";
import { ThemeContextProvider } from "./context/ThemeContext";

// Global style
import "./assets/scss/global.scss";

// Init fullStory
FullStory.init({ orgId: "o-1EA5CE-na1" });

const client = new ApolloClient({
  uri: "http://localhost:5001",
  cache: new InMemoryCache(),
});

const container = document.getElementById("root")! as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeContextProvider>
          <AuthContextProvider>
            <ModalContextProvider>
              <App />
            </ModalContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
