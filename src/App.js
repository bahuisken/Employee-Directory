import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer/";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    search: "",
  };

  newSearch = (input) => {
    this.setState({ search: input });
  };

  render() {
    return (
      <>
        <Header newSearch={this.newSearch} />
        <Main search={this.state.search} />
        <Footer />
      </>
    );
  }
}

export default App;
