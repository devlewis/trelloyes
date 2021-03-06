import React from 'react';
import Card from './Card'
import './List.css';

const List = (props) => {
  return (
    <section className="List">
      
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>

      <div className="List-cards">
        {props.cards.map(card =>
          <Card
            key={card.key}
            title={card.title}
            content={card.content} 
            onDeleteCard={props.onDeleteCard}/>)}
        <button type="button" className="List-add-button" onClick={props.onAddRandom}>
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

export default List;