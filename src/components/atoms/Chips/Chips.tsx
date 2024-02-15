import React from 'react'




interface IChip {
    label: string
    onClick: () => void

}

const Chips = (props: IChip) => {

    const {label, onClick} = props

  return (
    <div onClick={onClick} className="relative  grid  items-center whitespace-nowrap rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white sm:w-auto">
    <span>{label}</span>
  </div>
  )
}

export default Chips