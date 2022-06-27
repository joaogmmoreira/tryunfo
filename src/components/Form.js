import React from 'react';
import '../Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-div">
        <div>
          <label htmlFor="cardName">
            Name:
            <input
              data-testid="name-input"
              type="text"
              id="name-input"
              name="cardName"
              className="form"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardDescription">
            Description:
            <textarea
              data-testid="description-input"
              type="text"
              id="description-input"
              name="cardDescription"
              className="form description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr1">
            Rating 1.0:
            <input
              data-testid="attr1-input"
              type="number"
              id="attr1-input"
              name="cardAttr1"
              className="form"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr2">
            K/D Ratio:
            <input
              data-testid="attr2-input"
              type="number"
              id="attr2-input"
              name="cardAttr2"
              className="form"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr3">
            Major Champion:
            <input
              data-testid="attr3-input"
              type="number"
              id="attr3-input"
              name="cardAttr3"
              className="form"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardImage">
            Player Image:
            <input
              data-testid="image-input"
              type="text"
              id="image-input"
              name="cardImage"
              className="form"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardRare">
            Rarity:
            <select
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              className="form"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <button
            data-testid="save-button"
            type="submit"
            name="save-button"
            id="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
