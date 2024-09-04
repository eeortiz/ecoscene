import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormoReportShema, valueInformationsInfo } from '../schema/graficSchema'

const FormInitial = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<valueInformationsInfo>({
    resolver: zodResolver(FormoReportShema),
  })

  const dataValues = (data: valueInformationsInfo) => {
    console.log(data)
  }

  return (
    <Card>
      <form
        className="grid grid-cols-4 gap-4 p-5 "
        onSubmit={handleSubmit(dataValues, (errors) => console.log(errors))}
      >
        <div className="col-span-1">
          <Input {...register('productOne')} type="number" label="Producto" />
          {errors.productOne && (
            <p className="mt-2 text-sm text-red-600">
              {errors.productOne.message}
            </p>
          )}
        </div>
        <div className="col-span-1">
          <Input {...register('productTwo')} type="number" label="Producto 2" />
        </div>
        <div className="col-span-1">
          <Input
            {...register('productThree')}
            type="number"
            label="Producto 3"
          />
        </div>
        <div className="col-span-1">
          <Input
            {...register('productFour')}
            type="number"
            label="Producto 4"
          />
        </div>

        <div className="col-span-4 justify-end flex">
          <Button type="submit" className="bg-blue-500 text-white">
            Crear
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default FormInitial
