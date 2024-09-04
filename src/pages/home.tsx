import { useState } from 'react'
import homeContact from '../assets/Frame 9.png'

import logoEco from '../assets/LogoEco.png'
import { Button } from '../components/ui/button'
import { LoginPage } from './loginPage'

export const Home = () => {
  const [showLoginPage, setShowLoginPage] = useState(false)

  const [showHome, setShowHome] = useState(false)
  const handleButton = () => {
    setShowLoginPage(true)
    setShowHome(true)
  }

  return (
    <>
      <div className="p-5 bg-[#d9d8cd]  " hidden={showHome}>
        <div className="flex">
          <img src={logoEco} alt="Logo" />
          <div
            className="text-[#355972] font-black text-3xl space-x-20  items-center flex mx-5"
            style={{ fontFamily: 'cursive' }}
          >
            <span>Cómo funciona </span>
            <span>Servicios </span>
            <span>¿Por qué Ecoscene?</span>
            <span>Contáctanos</span>

            <Button
              onClick={handleButton}
              className="text-white  text-lg bg-[#90c49b]  w-52 h-14  border-[1.7px] border-black"
            >
              {' '}
              Login
            </Button>
          </div>
        </div>
        <div className="relative min-w-max h-[800px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${homeContact})`,
              opacity: 0.45,
            }}
          />

          <div
            className="relative z-10 pt-5 !text-[#213a1f] mx-5"
            style={{ fontFamily: 'cursive' }}
          >
            <h2 className="text-5xl  font-bold">-Contacto</h2>
            <p className="mt-10 text-2xl  font-semibold">
              ¿Quieres que sean mas sostenibles tus producciones de cine, series
              y televisión?
            </p>

            <p className="mt-10 text-2xl font-semibold ">
              Escríbenos y nos pondremos en contacto contigo.
            </p>

            <div className=" justify-end mx-auto grid text-2xl space-y-3 font-semibold mt-32">
              <p>Complejo Empresarial Connecta Edificio E2</p>
              <p>Telefono Conmutador :601 455 6787</p>
              <p>Correo Institucional: marketing@ecoscene.com </p>
              <p className="pl-60">publicidad@ecoscene.com</p>
              <p className="pl-60">exhibicion@ecoscene.com</p>
            </div>

            <div className=" justify-end mx-auto grid text-2xl mt-20 font-semibold">
              <p className="pl-80">Horario de Atención Presencial: </p>
              <p className="text-[#6099c1] opacity-85 ">
                Lunes a viernes de 8:30 a.m - 4:30 p.m Jornada Continua
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <img src={logoEco} alt="Logo" />
        </div>
      </div>
      {showLoginPage && (
        <div>
          <LoginPage />
        </div>
      )}
    </>
  )
}
