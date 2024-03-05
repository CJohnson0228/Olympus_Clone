import { ThemeProvider } from './styles/ThemeProvider.tsx'
import { lightTheme } from './styles/lightTheme.ts'
import { darkTheme } from './styles/darkTheme.ts'

import { useAppSelector } from './redux/reduxHooks.tsx'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'

function App() {
  const theme = useAppSelector(state => state.appState.darkMode)
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme }>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider> 
  )
}

export default App
