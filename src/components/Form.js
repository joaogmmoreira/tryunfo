import React from 'react';
import '../Form.css';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;

    return (
      <div className="form-div">
        <div>
          <label htmlFor="name-input">
            Name:
            <input
              data-testid="name-input"
              type="text"
              id="name-input"
              name="name-input"
              className="form"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="description-input">
            Description:
            <textarea
              data-testid="description-input"
              type="text"
              id="description-input"
              name="description-input"
              className="form description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1-input">
            Rating 1.0:
            <input
              data-testid="attr1-input"
              type="number"
              id="attr1-input"
              name="attr1-input"
              className="form"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2-input">
            K/D Ratio:
            <input
              data-testid="attr2-input"
              type="number"
              id="attr2-input"
              name="attr2-input"
              className="form"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3-input">
            Major Champion:
            <input
              data-testid="attr3-input"
              type="number"
              id="attr3-input"
              name="attr3-input"
              className="form"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="image-input">
            Player Image:
            <input
              data-testid="image-input"
              type="text"
              id="image-input"
              name="image-input"
              className="form"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            Rarity:
            <select
              data-testid="rare-input"
              id="rare-input"
              name="rare-input"
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
          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo-input"
              name="trunfo-input"
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

export default Form;
