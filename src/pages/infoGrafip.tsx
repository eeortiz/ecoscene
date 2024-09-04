import React from 'react'

interface Props {
  title: string
  namesCard: string[]
}

export const InfoGrafip: React.FC<Props> = ({ title, namesCard }) => {
  return (
    <div className="w-full justify-center mx-auto grid grid-cols-1">
      <h1 className="text-center text-2xl mt-4">{title}</h1>
      {namesCard.map((dato) => (
        <div className="space-y-10 justify-center flex items-center">
          <span className="bg-white h-16  w-7/12 text-lg text-start col-span-1 mt-6 items-center flex pl-5  shadow-xl">
            {dato}
          </span>
        </div>
      ))}
    </div>
  )
}
