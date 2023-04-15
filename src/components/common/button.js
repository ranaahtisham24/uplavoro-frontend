import React from 'react'

const Button = (props) => {
  return (
    <button
      type="submit"
      className={`${props?.style ? props?.style : 'text-sm'} rounded-md py-2 px-6 ${props?.ring ? 'ring-1 ring-inset ring-white' : ''}`}
      onClick={props?.onClick}
    >
      {props?.title}
    </button>
  )
}

export default Button