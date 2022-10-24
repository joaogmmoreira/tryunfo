import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const isTrunfoCard = (cardInfo) => {
      if (cardInfo) {
        return (<span data-testid="trunfo-card">Super Trunfo</span>);
      }
    };

    return (
      <div className="card-preview">
        <h3 className="name-card" data-testid="name-card">{ cardName }</h3>
        <img
          className="image-card"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p
          className="description-card"
          data-testid="description-card"
        >
          { cardDescription }
        </p>
        <div className="attributes">
          <span
            className="attr"
            data-testid="attr1-card"
          >
            {`Rating 2.0: ${cardAttr1}`}
          </span>
          <span
            className="attr"
            data-testid="attr2-card"
          >
            { `K/D Ratio: ${cardAttr2}` }
          </span>
          <span
            className="attr"
            data-testid="attr3-card"
          >
            {`Major Championship: ${cardAttr3}`}
          </span>
          <span
            className="rare-card"
            data-testid="rare-card"
          >
            {`Rarity: ${cardRare}`}
          </span>
          <span className="isTrunfo">{ isTrunfoCard(cardTrunfo) }</span>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
