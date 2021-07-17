import React, { Component } from "react";
import PropTypes from "prop-types";

class Intro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isExploredClicked: false,
  //     };
  //   }

  //   handleExplore = () => {
  //     this.setState({ isExploredClicked: true });
  //   };

  render() {
    return (
      <div className="intro">
        <h2>{I18n.t("intro.question")}</h2>
        <p>{I18n.t("intro.explanation")}</p>
        <h2>{I18n.t("intro.how_to_use")}</h2>
        <button onClick={this.props.handleExplore}>EXPLORE</button>
      </div>
    );
  }
}

export default Intro;
