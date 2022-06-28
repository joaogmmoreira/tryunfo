import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import data from './components/DataCards';
import CardsComponent from './components/CardsComponent';

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
      cardData: data,
    };
  }

  isTrunfoCard = (cardInfo) => {
    if (cardInfo) {
      return (<span data-testid="trunfo-card">Super Trunfo</span>);
    }
  };

  isThereTrunfoInData = () => {
    const { cardData } = this.state;
    // console.log(data);
    cardData.some((element) => element.cardTrunfo === true);
  }

  handleCheckBox = () => {
    (<span>Você já tem um Super Trunfo em seu baralho</span>);
  };

  handleHasTrunfo = (func) => {
    if (func) {
      this.setState({
        hasTrunfo: true,
      }, () => {
        this.handleCheckBox();
      });
    }
    this.setState({
      hasTrunfo: false,
    });
  };

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
      // return console.log('Zuou');
      return true;
    }
    // return console.log('Tá na moral');
    return false;
  }

  checkAttrBetween0and90 = () => {
    const minAttr = 0;
    const maxAttr = 90;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    if ((Number(cardAttr1) > maxAttr || Number(cardAttr1) < minAttr)
      || (Number(cardAttr2) > maxAttr || Number(cardAttr2) < minAttr)
      || (Number(cardAttr3) > maxAttr || Number(cardAttr3) < minAttr)) {
      // console.log('zuou');
      return true;
    }
    // console.log('tá na moral');
    return false;
  }

  checkAttrSum = () => {
    const maxSum = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSum) {
      // return console.log('zuou');
      return true;
    }
    // return console.log('Tá na moral');
    return false;
  }

  handleButtonChange = (func1, func2, func3) => {
    if (func1 || func2 || func3) {
      // console.log('True');
      this.setState({
        isSaveButtonDisabled: true,
      }, () => {});
    } else {
      // console.log('false');
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
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    // não está alterando o estado de hastrunfo
    // acusa falta de key em cardcomponent
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
    }));

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
      <div>
        <h1>Tryunfo!</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          // handleCheckBox={ this.handleCheckBox }
        />
        <Card
          { ...this.state }
          isTrunfoCard={ this.isTrunfoCard }
        />
        <CardsComponent
          isTrunfoCard={ this.isTrunfoCard }
          cardData={ cardData }
        />
      </div>
    );
  }
}

export default App;
