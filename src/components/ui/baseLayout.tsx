import { SetStateAction, useState } from 'react'
import logoInfo from '../../assets/LogoEco.png'
import { InfoGrafip } from '../../pages'
import { useNavigate } from 'react-router-dom'

export const BaseLayout = () => {
  const [selectedOption, setSelectedOption] = useState('produccion')

  const hadleButton = (option: SetStateAction<string>) => {
    setSelectedOption(option)
  }

  const nameInformations = [
    'Nombre del Proyecto ',
    'Ubicación',
    'Fecha de inicio',
    'Fecha de finalización',
    'Tipo de Producción',
  ]

  const nameTrasporte = [
    'Tipo de Vehiculo ',
    'Tipo de Combustible Usado',
    'Unidades de Combustibles',
    'Cantidad de Kilometros Recorridos',
    'Numero de Viajes',
  ]

  const nameEnergia = [
    'Tipo de Energía Usada',
    'Fuentes de Energía Contratadas',
    'Consumo de Energía',
    'Electricidad Usada (KWh)',
    'Días de Producción ',
  ]
  const nameResiduos = [
    'Tipo de Residuos',
    'Botellas Usadas( Agua y Otras Bebidas)',
    'Unidad de Medida',
    'Tipo de Comida',
    'Unidad de Medidad',
    'Porciones de Comida',
  ]

  const nameHospedaje = [
    'Tipo de Hospedaje',
    'Tipo de Acomodación',
    'Número de Noches',
    'Núemero de Habitaciones',
    'Número de Huespedes',
  ]

  const navigate = useNavigate()

  const renderInfo = () => {
    switch (selectedOption) {
      case 'produccion':
        return (
          <InfoGrafip
            title="Información de la Producción"
            namesCard={nameInformations}
          />
        )
      case 'transporte':
        return <InfoGrafip title="Transporte" namesCard={nameTrasporte} />
      case 'energia':
        return <InfoGrafip title="Consumo de Energía" namesCard={nameEnergia} />
      case 'residuos':
        return (
          <InfoGrafip
            title="Información de Residuos"
            namesCard={nameResiduos}
          />
        )
      case 'hospedaje':
        return (
          <InfoGrafip
            title="Información de Hospedaje"
            namesCard={nameHospedaje}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="bg-[#d9d8cd]  min-h-screen">
        <menu className="w-full  justify-center mx-auto    ">
          <img
            src={logoInfo}
            alt="Img"
            className="hover:cursor-pointer"
            onClick={() => {
              navigate('/')
            }}
          />
          <div className="flex 2xl:space-x-40 p-2 space-x-20 bg-[#90C49B] pt-4 pb-4 pl-3 pr-3  mx-32 items-center 2xl:w-10/12 text-white border-[1px] border-black ">
            <span
              className="cursor-pointer"
              onClick={() => hadleButton('produccion')}
            >
              Informacion de la Producción
            </span>
            <span
              className="cursor-pointer"
              onClick={() => hadleButton('transporte')}
            >
              Transporte
            </span>
            <span
              className="cursor-pointer"
              onClick={() => hadleButton('energia')}
            >
              Consumo de energía{' '}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => hadleButton('residuos')}
            >
              Residuos
            </span>

            <span
              className="cursor-pointer"
              onClick={() => hadleButton('hospedaje')}
            >
              Hospedaje
            </span>

            <span>Informe</span>
          </div>
        </menu>
        {renderInfo()}
      </div>
    </>
  )
}
