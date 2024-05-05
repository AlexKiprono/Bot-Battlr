import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then(data => setBots(data))

  }, [])

  //adding bots to your army
  const addToYourArmy = (bot) => {
    if(!yourBots.includes(bot)){
      setYourBots([...yourBots, bot])
    }
  }
//removing bots from your army
  const removeBot = (bot) => {
    setYourBots(yourBots.filter(yourBot => yourBot.id !== bot.id))
  }

  return (
    <div>
      {!bots.length ? <h1>Loading...</h1>: null}
      <YourBotArmy bots={yourBots} removeBot={removeBot}/>
      <BotCollection bots={bots} botFunction={addToYourArmy}/>
    </div>
  )
}

export default BotsPage;