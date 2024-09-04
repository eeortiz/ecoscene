import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AgentsfSchema, listOfAgentsValues } from '../schema/loginSchema'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Card } from '../components/ui/card'
import logoEco from '../assets/LogoEco.png'

import { useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const [saveValuesLogin] = useState<listOfAgentsValues>({
    email: 'proyectoecoscene@gmail.com.co',
    paswoord: '1234567',
  })

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<listOfAgentsValues>({
    resolver: zodResolver(AgentsfSchema),
  })

  const navigate = useNavigate()
  const hadleEvent = (data: listOfAgentsValues) => {
    if (
      saveValuesLogin.email !== data.email ||
      saveValuesLogin.paswoord !== data.paswoord
    ) {
      Swal.fire({
        title: 'Upp!',
        text: 'Credenciales incorrectas ',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'gray',
        color: 'gray',
      })
    } else {
      navigate('/home')
    }
  }

  return (
    <>
      <div className="bg-[#d9d8cd] min-h-screen ">
        <div>
          <img src={logoEco} alt="Logo" />
        </div>
        <Card className="w-10/12  p-5 absolute mt-10 mx-40 ">
          <form
            onSubmit={handleSubmit(hadleEvent)}
            className="grid grid-cols-1 gap-4 "
          >
            <div className="col-span-1">
              <Input
                placeholder="Correo electronico"
                type="email"
                className="rounded-none bg-white h-14 shadow-lg"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="col-span-1">
              <Input
                placeholder="Contraseña"
                type="password"
                className="rounded-none bg-white h-14 shadow-lg"
                {...register('paswoord')}
              />

              {errors.paswoord && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.paswoord.message}
                </p>
              )}
            </div>

            <div className=" justify-center flex">
              <Button type="submit" className="bg-teal-600 w-44 text-white">
                Login
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  )
}
