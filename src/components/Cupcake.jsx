import React, { useState } from 'react'

function Cupcake({color,children}) {
    // const[amigo, setAmigo]= useState("Enojado")
  return (
    <div claseName={color}>Cupcake - {children} </div>
  )
}

export default Cupcake