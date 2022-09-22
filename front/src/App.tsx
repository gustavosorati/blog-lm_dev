import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from './context/UserContext'
import { Router } from './router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/light'

function App() {

  return (
    <BrowserRouter>
        <UserProvider>
            <ThemeProvider theme={defaultTheme}>
                <Router />
                <GlobalStyles />
            </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
