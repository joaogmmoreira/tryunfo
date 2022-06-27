import React from 'react';
// import Card from './Card';
import data from './DataCards';

class CardsComponent extends React.Component {
  render() {
    const isTrunfoCard = (cardInfo) => {
      if (cardInfo) {
        return (<span data-testid="trunfo-card">Super Trunfo</span>);
      }
    };

    const cardsList = data.map((element) => (
      <div key={ element.name }>
        <h3 data-testid="name-card">{ element.cardName }</h3>
        <img
          data-testid="image-card"
          src={ element.cardImage }
          alt={ element.cardName }
        />
        <p data-testid="description-card">{ element.cardDescription }</p>
        <span data-testid="attr1-card">{ element.cardAttr1 }</span>
        <span data-testid="attr2-card">{ element.cardAttr2 }</span>
        <span data-testid="attr3-card">{ element.cardAttr3 }</span>
        <span data-testid="rare-card">{ element.cardRare }</span>
        <span>{ isTrunfoCard(element.cardTrunfo) }</span>
      </div>
    ));
    return (
      <div>
        {cardsList}
      </div>
    );
  }
}

export default CardsComponent;
