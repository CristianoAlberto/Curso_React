import React from 'react'

function Events() {

  const handleClick = (e) => {
    console.log("Testanto evento");
    console.log(e);
  }

  const renderSomething = (x) => {
    if(x){
      return <h1>Renderizando isso!</h1>
    }else{
      return <h1>Rederizando outra coisa!</h1>
    }
  }

  
  return (
    <div>
      <div>
        <button onClick={()=> {console.log("Testando evento no console")}}>
            Clique aqui
        </button>
      </div>

      <div>
        <button onClick={handleClick}>
          Clique aqui 2
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events