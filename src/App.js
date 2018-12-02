import React, { Component } from 'react';
import './App.css';
import IntroBox from './components/IntroBox';
import ItemContainer from './components/ItemContainer';
import Footer from './components/Footer';
import Texts from './data/Texts';

class App extends Component {

  LANGUAGE = {

    ENG: Texts.englishTexts,
    FIN: Texts.finnishTexts
  };

  constructor(props) {
    super(props);

    // console.log("react version: " + React.version); => 16.6.3

    this.state = {

      texts: this.LANGUAGE.ENG
    }
  }

  // passed down all the way to individual InfoItem components
  _toggleInfoItemVisibility = (mapKey, isCurrentlyVisible) => {

    let texts = this.state.texts
    let item = texts.body.get(mapKey) // array of the form ['headline', 'body', isVisible]
    item[2] = !isCurrentlyVisible
    texts.body.set(mapKey, item)

    this.setState({ texts: texts })
  } // _toggleInfoItemVisibility

  // takes either of the two values in the LANGUAGE enum
  _toggleLanguage = (languageChoice) => {

    if (languageChoice === this.state.texts) return;

    this.setState({

      texts: languageChoice
    })
  } // _toggleLanguage

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <IntroBox texts={this.state.texts.intro} toggleLanguage={this._toggleLanguage} languageEnum={this.LANGUAGE} />
        </div>
        <ItemContainer textMap={this.state.texts.body} toggleItemVisibility={this._toggleInfoItemVisibility} />
        <Footer />
      </div>
    );
  }
}

export default App;