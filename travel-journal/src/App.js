import React from "react"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import data from "./data"
import css from "./index.css"


export default function App(){

    const cards = data.map(item =>{
       return(
              <Cards 
          {...item}
                />
       )
    })

    return(
        <div>
          <Navbar />
          {cards}
        </div>
    )
    
}
