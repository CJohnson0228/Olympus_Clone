import { FC, ReactElement, createContext, PropsWithChildren, useContext } from 'react'
import { ThemeProps } from './ThemeTypes'
import { lightTheme } from './lightTheme'

export const ThemeContext = createContext(lightTheme)

interface ProviderProps extends PropsWithChildren {
  theme: ThemeProps,
  children: ReactElement,
}

const ThemeProvider: FC<ProviderProps> = (props) => {
  const {
    theme = lightTheme,
    children
  } = props
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

export {
  ThemeProvider,
  // eslint-disable-next-line react-refresh/only-export-components
  useTheme
}