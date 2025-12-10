import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import './App.css'
import './index.css'

import Header from '../components/Header'
import Form from '../components/Form'
import Tenzies from '../components/Tenzies'
import Die from '../components/Die'

function App() {
  let [username, setUserName] = useState("");
  let [dice, setDice] = useState(() => randomNumArr ())

  function submitName(formData) {
    let name = formData.get("username");
    setUserName(name);
  }

  function randomNumArr () {
      let randomNums = Array(10).fill(0).map(num => randomNum() );
      return randomNums.map(num => { 
        return {value:num, isHeld:false, id:nanoid()}
      })
  }

  function randomNum () {
    return Math.floor(Math.random() * 9)
  }

  function rollDice(){
    gameWon ? setDice(randomNumArr()) :
    setDice(oldDice => oldDice.map(die => (die.isHeld) ? die : {...die, value:randomNum()}))
  }

  function holdDie(id){
    setDice(oldDice => oldDice.map(die => (id === die.id) ? {...die, isHeld:!die.isHeld} : die))
  }

  let diceElems = dice.map(obj => {
    return (
    <Die key={obj.id} value={obj.value} isHeld={obj.isHeld} holdDie={() => holdDie(obj.id)}/>
  )})

  
  useEffect(() => {
    let headerSize = document.querySelector("header").getBoundingClientRect().height;
    const root = document.documentElement;
    root.style.setProperty("--header-size", `${headerSize + 50}px`);
  }, [])

  let gameWon = (dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value))

  return (
    <>
     <Header name={username}/>
     <section className='main-section'>
      {(username === "") ? <Form submit={submitName}/> : 
          <Tenzies elemArr={diceElems} rollBtn={rollDice} gameStatus={gameWon}/>}

     </section>
    </>
  )
}

export default App
