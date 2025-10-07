import React from 'react'
import Header from '../components/Project_2/Header'
import Entry from '../components/Project_2/Entry'
import Contact from '../components/Project_2/ContactComponent'

const TravelJournal = () => {
  return (
    <>
        <Header />
        <Entry />
        <Entry />
        <Contact 
        img="https://i.pinimg.com/1200x/f4/b7/95/f4b795474207b2022bb6939e4b79844c.jpg"
        name="Mr Bad"
        phone="(202) 555 678"
        email="flash@gmail.com"
        />
        <Contact 
        img="https://i.pinimg.com/1200x/f4/b7/95/f4b795474207b2022bb6939e4b79844c.jpg"
        name="Mr Jessy"
        phone="(202) 555 678"
        email="flash@gmail.com"
        />
        <Contact 
        img="https://i.pinimg.com/1200x/f4/b7/95/f4b795474207b2022bb6939e4b79844c.jpg"
        name="Mr Bob"
        phone="(202) 555 678"
        email="flash@gmail.com"
        />
        <Contact 
        img="https://i.pinimg.com/1200x/f4/b7/95/f4b795474207b2022bb6939e4b79844c.jpg"
        name="Mr Eric"
        phone="(202) 555 678"
        email="flash@gmail.com"
        />
    </>
  )
}

export default TravelJournal
