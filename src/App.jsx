import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "../data.js"

export default function App(){

  const final = data.map((items)=>{
    return(
      <Card
          {...items}
          />
    )

  })

 

  
  
  
  //
  return (
    <>
     
     < Navbar/>
      <Hero />
      <section className="cards-list">
              {final}
            </section>
      
    
   
    </>
  )
}
