import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  previousPage,
  nextPage,
  previousWord,
  nextWord,
  editWord,
  goPage
} from "../actions.js";
import Layout from "../components/layout.js";
import Card from "../components/card.js";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    return { isServer };
  }

  componentDidMount() {
    //
    console.log("Index componentDidMount");
  }

  render() {
    return (
      <Layout>
        <Card {...this.props} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

const mapDispatchToProps = dispatch => {
  return {
    previousPage: bindActionCreators(previousPage, dispatch),
    nextPage: bindActionCreators(nextPage, dispatch),
    previousWord: bindActionCreators(previousWord, dispatch),
    nextWord: bindActionCreators(nextWord, dispatch),
    editWord: bindActionCreators(editWord, dispatch),
    goPage: bindActionCreators(goPage, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
