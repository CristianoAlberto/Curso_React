import React from 'react'

const CondicionalRender = () => {

    const x = true;
    const name = 'Chris';

  return (
    <div>
        <h3>Isso sera exibido?</h3>
        {x ? <p>Se x for true sim!</p>:<p>Se for false não!</p>}

        {name === "Chris" ? (
            <div>
                <p>Olá Chris</p>
            </div>
        ): (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default CondicionalRender