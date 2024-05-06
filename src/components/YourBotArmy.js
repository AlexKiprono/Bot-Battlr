import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot }) {
  const botArmy = bots?.map((bot) => (
    <BotCard key={bot.id} bot={bot} botFunction={removeBot} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy}
          {bots.length === 0 ? <p>No Bots</p> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
