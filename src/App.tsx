import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider >
  )
}

export default App
