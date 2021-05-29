import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from 'react-query'

const twentyFourHoursInMs = 1000 * 60 * 60* 24
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: twentyFourHoursInMs
        }
    }
})

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
