import React from 'react'

function Events() {

  const handleClick = (e) => {
    console.log("Testanto evento");
    console.log(e);
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
    </div>
  )
}

export default Events