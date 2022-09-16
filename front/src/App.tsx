import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/light'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
