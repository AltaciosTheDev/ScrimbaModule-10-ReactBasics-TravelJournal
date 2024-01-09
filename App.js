import React from "react"
import Navbar from "./components/Navbar.js"
import Trip from "./components/Trip.js"
import data from "./data.js"

const tripElements = data.map(trip => {
    return(
        <Trip 
            key={trip.Id}
            {...trip}
        />
    )
})

export default function App(){
    return(
        <>
            <Navbar />
            <section>
                {tripElements}
            </section>
        </>
    )
}