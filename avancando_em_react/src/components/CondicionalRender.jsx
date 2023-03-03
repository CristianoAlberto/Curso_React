import React from 'react'

const CondicionalRender = () => {

    const x = false;


  return (
    <div>
        <h3>Isso sera exibido?</h3>
        {x && <p>Se x for true sim!</p>}

    </div>
  )
}

export default CondicionalRender