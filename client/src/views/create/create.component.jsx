import { useState } from 'react'
import './create.styles.css'

function Create() {
  



  return(
    <div>
      <form onSubmit={""}>
        <div>
          <label>Nombre</label>
          <input />
        </div>

        <div>
          <label>Email</label>
          <input />
        </div>

        <div>
          <label>Telefono</label>
          <input />
        </div>

      </form>
    </div>
  )


}

export default Create