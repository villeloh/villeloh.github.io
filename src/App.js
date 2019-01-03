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

    this.appRef = React.createRef();
    this.state = {

      texts: this.LANGUAGE.ENG
    }
  } // constructor

  componentDidMount = () => {

    const appNode = this.appRef.current;
    appNode.height = window.height;
  }

  // passed down all the way to individual InfoItem components
  toggleInfoItemVisibility = (mapKey, isCurrentlyVisible) => {

    let texts = this.state.texts
    let item = texts.body.get(mapKey) // array of the form ['headline', 'body', isVisible]
    item[2] = !isCurrentlyVisible
    texts.body.set(mapKey, item)

    this.setState({ texts: texts })
  } // toggleInfoItemVisibility

  // takes either of the two values in the LANGUAGE enum
  toggleLanguage = (languageChoice) => {

    if (languageChoice === this.state.texts) return;

    this.setState({

      texts: languageChoice
    })
  } // toggleLanguage

  render() {
    return (
      <div className="App" ref={this.appRef} >
        <div className="App-header">
          <IntroBox texts={this.state.texts.intro} toggleLanguage={this.toggleLanguage} languageEnum={this.LANGUAGE} />
        </div>
        <ItemContainer textMap={this.state.texts.body} toggleItemVisibility={this.toggleInfoItemVisibility} />
        <Footer />
      </div>
    );
  } // render
} // App

export default App;