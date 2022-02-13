import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './src'
import { theme } from './styles/theme'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
