import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import imperialData from './Cards/Imperial/DataCards';
import CardsComponent from './components/CardsComponent';
import './Style/App.css';
import './Style/CardPreview.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardData: imperialData,
    };
  }

  handleDeleteCard = (name) => {
    const { cardData } = this.state;
    const newData = cardData.filter((element) => element.cardName !== name);
    console.log(newData);
    return this.setState({
      cardData: newData,
    });
  }

  isThereTrunfoInData = () => {
    const { cardData } = this.state;
    // console.log(data);
    return cardData.some((element) => element.cardTrunfo === true);
  }

  handleHasTrunfo = () => {
    if (this.isThereTrunfoInData()) {
      return this.setState({
        hasTrunfo: true,
      });
    }
    return this.setState({
      hasTrunfo: false,
    });
  }

  checkInput = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0
    ) {
      return true;
    }
    return false;
  }

  checkAttrBetween0and90 = () => {
    const minAttr = 0;
    const maxAttr = 90;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    if ((Number(cardAttr1) > maxAttr || Number(cardAttr1) < minAttr)
      || (Number(cardAttr2) > maxAttr || Number(cardAttr2) < minAttr)
      || (Number(cardAttr3) > maxAttr || Number(cardAttr3) < minAttr)) {
      return true;
    }
    return false;
  }

  checkAttrSum = () => {
    const maxSum = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSum) {
      return true;
    }
    return false;
  }

  handleButtonChange = (func1, func2, func3) => {
    if (func1 || func2 || func3) {
      this.setState({
        isSaveButtonDisabled: true,
      }, () => {});
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      }, () => {});
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.handleButtonChange(this.checkInput(),
        this.checkAttrBetween0and90(), this.checkAttrSum());
    });
    this.handleHasTrunfo();
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
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
      cardData,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState(() => ({
      cardData: [newCard, ...cardData],
    }), () => {
      this.handleHasTrunfo();
    });

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => {});
  }

  render() {
    const { cardData } = this.state;
    return (
      <div className="main">
        <h1>Tryunfo!</h1>
        <div className="making-cards">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isTrunfoCard={ this.isTrunfoCard }
          />
          <Card
            { ...this.state }
            isTrunfoCard={ this.isTrunfoCard }
          />
        </div>
        <hr />
        <CardsComponent
          isTrunfoCard={ this.isTrunfoCard }
          cardData={ cardData }
          handleDeleteCard={ this.handleDeleteCard }
        />
      </div>
    );
  }
}

export default App;
