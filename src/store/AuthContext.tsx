import { createContext, useState, useCallback } from 'react'
import { AuthValues } from '../types/user'
import { AuthSlice, AuthState } from './authStore'
import { PageLoader } from '../components/ui/PageLoader'
import { useBoundStore } from '../store'
import { shallow } from 'zustand/shallow'

interface Props {
  children: React.ReactNode
}

type ActionCallback = () => void

type MockDataKeys = 'user@example.com' | 'test@example.com'

interface AuthContextValue {
  login: (params: AuthValues, cb?: ActionCallback) => Promise<void>
  logout: (cb?: ActionCallback) => void
  user: AuthState
  isLoggingIn: boolean
  isCheckingSession: boolean
  error: string
}

const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const contextValue = useAuthProvider()
  if (contextValue.isCheckingSession) return <PageLoader />

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

const useAuthProvider = (): AuthContextValue => {
  const authStore: AuthSlice = useBoundStore(
    ({
      isAuthenticated,
      setLogin,
      setLogout,
      setRefresh,
      token,
      refreshToken,
      roleName,
      userId,
      loggedInDate,
      firstName,
      lastName,
      roleId,
    }) => ({
      isAuthenticated,
      token,
      refreshToken,
      roleName,
      userId,
      loggedInDate,
      setLogin,
      setLogout,
      setRefresh,
      firstName,
      lastName,
      roleId,
    }),
    shallow
  )

  const [isCheckingSession, setIsCheckingSession] = useState(true)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [error, setError] = useState('')

  // Simula el proceso de login con datos ficticios
  const simulateLogin = async (values: AuthValues) => {
    // Definir los datos ficticios
    const mockData: Record<
      MockDataKeys,
      { token: string; refreshToken: string; userId: string; roleName: string }
    > = {
      'user@example.com': {
        token: 'fake-token-123',
        refreshToken: 'fake-refresh-token-123',
        userId: 'user-id-123',
        roleName: 'admin',
      },
      'test@example.com': {
        token: 'fake-token-456',
        refreshToken: 'fake-refresh-token-456',
        userId: 'user-id-456',
        roleName: 'user',
      },
    }
    // Validar los valores de entrada
    const { username, password } = values

    // Asegúrate de que username sea una clave válida
    if (
      !(['user@example.com', 'test@example.com'] as const).includes(
        'user@example.com'
      )
    ) {
      throw new Error('Usuario no encontrado')
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simula un retraso de 1 segundo

    if (username === 'cristian.ortiz.com' && password === 'password123') {
      return mockData[username as 'user@example.com']
    } else if (username === 'test@example.com' && password === 'password456') {
      return mockData[username as 'test@example.com']
    } else {
      throw new Error('Usuario o contraseña incorrecta')
    }
  }

  const login: AuthContextValue['login'] = useCallback(
    async (values, callback) => {
      setIsLoggingIn(true)
      setError('')

      try {
        const data = await simulateLogin(values)
        authStore.setLogin({
          token: data.token,
          refreshToken: data.refreshToken,
          userId: data.userId,
          roleName: data.roleName,
          firstName: 'DefaultFirstName', // Proveer valor por defecto
          lastName: 'DefaultLastName', // Proveer valor por defecto
          roleId: 'DefaultRoleId',
        })
        callback?.()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoggingIn(false)
      }
    },
    [authStore]
  )

  const logout: AuthContextValue['logout'] = (callback) => {
    authStore.setLogout()
    callback?.()
  }

  // Simula el proceso de verificar sesión al iniciar
  useState(() => {
    const checkSession = async () => {
      // Simular verificación de sesión
      setIsCheckingSession(false)
    }
    checkSession()
  })

  return {
    login,
    logout,
    user: {
      token: authStore.token,
      refreshToken: authStore.refreshToken,
      userId: authStore.userId,
      roleName: authStore.roleName,
      isAuthenticated: false,
      loggedInDate: null,
      firstName: null,
      lastName: null,
      roleId: null,
    },
    isLoggingIn,
    isCheckingSession,
    error,
  }
}


export const useAuthStore = (): Omit<AuthState, 'token' | 'refreshToken'> =>
  useBoundStore(
    ({ isAuthenticated, roleName, userId, loggedInDate, firstName, lastName, roleId }) => ({
      isAuthenticated,
      roleName,
      userId,
      loggedInDate,
      firstName,
      lastName,
      roleId
    }),
    shallow
  )