import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import './App.css'
import './index.css'

import Header from '../components/Header'
import Form from '../components/Form'
import Tenzies from '../components/Tenzies'
import Die from '../components/Die'

function App() {
  let [username, setUserName] = useState("Test");
  let [dice, setDice] = useState(() => randomNumArr ())

  function submitName(formData) {
    let name = formData.get("username");
    setUserName(name);
  }

  function randomNumArr () {
      let randomNums = Array(10).fill(0).map(num => Math.floor(Math.random() * 9));
      return randomNums.map(num => { 
        return {value:num, isHeld:false, id:nanoid()}
      })
  }

  let diceElems = dice.map(obj => {
    return (
    <Die key={obj.id} value={obj.value} isHeld={obj.isHeld}/>
  )
  })
  console.log(diceElems)
  
  useEffect(() => {
    let headerSize = document.querySelector("header").getBoundingClientRect().height;
    const root = document.documentElement;
    root.style.setProperty("--header-size", `${headerSize + 50}px`);
  }, [])

  return (
    <>
     <Header name={username}/>
     <section className='main-section'>
      {(username === "") ? <Form submit={submitName}/> : <Tenzies elemArr={diceElems} />}

     </section>
    </>
  )
}

export default App
