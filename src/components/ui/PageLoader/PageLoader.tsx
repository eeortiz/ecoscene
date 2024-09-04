import { Spinner } from '../Spinner'

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center text-primary">
      <Spinner size="4xl" />
    </div>
  )
}
