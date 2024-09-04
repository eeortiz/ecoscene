import { type StateCreator } from 'zustand'
import { AuthUser } from '../types/user'
import { Nulleable } from '../lib/utils'

export interface AuthState extends Nulleable<AuthUser> {
  isAuthenticated: boolean
  loggedInDate: Date | null
}

export interface AuthActions {
  setLogin: (params: AuthUser) => void
  setRefresh: (params: AuthUser) => void
  setLogout: () => void
}

export type AuthSlice = AuthState & AuthActions

const initialState: AuthState = {
  firstName: null,
  isAuthenticated: false,
  loggedInDate: null,
  lastName: null,
  token: null,
  refreshToken: null,
  roleName: null,
  userId: null,
  roleId: null,
}
export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setLogin(newState) {
    set({
      isAuthenticated: true,
      loggedInDate: new Date(),
      ...newState,
    })
  },
  setRefresh(newState) {
    set((prevState) => ({
      ...newState,
      isAuthenticated: true,
      loggedInDate: prevState.loggedInDate
        ? new Date(prevState.loggedInDate)
        : new Date(),
    }))
  },
  setLogout() {
    set(initialState)
  },
})
