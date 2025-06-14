import React from 'react'

const Button = ({name,handleClick}) => {
    
  return (
    <button className='px-5 py-2 bg-zinc-900 m-5 rounded-md text-white' onClick={handleClick}>
        {name}
    </button>
  )
}

export default Button