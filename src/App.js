import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = () => {

  }

  handleAddCard = () => {

  }

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
          <List 
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            onDeleteCard={this.handleDeleteCard}
            onAddRandom={this.handleAddCard}
          />))}
        </div>
      </main>
    );
  }
}

export default App;
