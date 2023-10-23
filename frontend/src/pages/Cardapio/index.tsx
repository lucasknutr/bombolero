import React from 'react'

const Cardapio = (menuOptionsList: any) => {
  return (
    <>
        <div className="">
            <h1>Cardápio</h1>
        </div>
        <div className="">
            <ul>
                {menuOptionsList}
            </ul>
        </div>
    </>
  )
}

export default Cardapio