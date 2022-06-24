import React from 'react';
import '../Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name-input">
            Name:
            <input
              data-testid="name-input"
              type="text"
              id="name-input"
              name="name-input"
              className="form"
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
              className="form"
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
            />
          </label>
        </div>

        <div>
          <button
            data-testid="save-button"
            type="submit"
            name="save-button"
            id="save-button"
          >
            Salvar
          </button>
        </div>

      </div>
    );
  }
}

export default Form;
