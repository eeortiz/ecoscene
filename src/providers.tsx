import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PageLoader } from './components/ui/PageLoader'
import { AuthProvider } from './store/AuthContext'
import { PUBLIC_URL } from './consts'

interface ProvidersProps {
  children: ReactNode
}
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <BrowserRouter basename={PUBLIC_URL}>
        <ToastContainer position="top-right" />
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}
