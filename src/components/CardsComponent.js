import React from 'react';
import PropTypes from 'prop-types';

class CardsComponent extends React.Component {
  render() {
    const { cardData, handleDeleteCard } = this.props;

    const cardsList = cardData.map((element) => (
      <div className="card-preview" key={ element.cardName }>
        <h3 className="name-card" data-testid="name-card">{ element.cardName }</h3>
        <img
          className="image-card"
          data-testid="image-card"
          src={ element.cardImage }
          alt={ element.cardName }
        />
        <p
          className="description-card"
          data-testid="description-card"
        >
          { element.cardDescription }
        </p>
        <div className="attributes">
          <span
            className="attr"
            data-testid="attr1-card"
          >
            { `Rating 2.0: ${element.cardAttr1}` }
          </span>
          <span
            className="attr"
            data-testid="attr2-card"
          >
            { `K/D Ratio: ${element.cardAttr2}` }
          </span>
          <span
            className="attr"
            data-testid="attr3-card"
          >
            { `Major Championship: ${element.cardAttr3}` }
          </span>
          <span
            className="attr"
            data-testid="rare-card"
          >
            { element.cardRare }
          </span>
        </div>
        <button
          data-testid="delete-button"
          type="button"
          onClick={ () => handleDeleteCard(element.cardName) }
        >
          Excluir
        </button>
      </div>
    ));

    return (
      <div>
        {cardsList}
      </div>
    );
  }
}

CardsComponent.propTypes = {
  // isTrunfoCard: PropTypes.func.isRequired,
  cardData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
};

export default CardsComponent;
