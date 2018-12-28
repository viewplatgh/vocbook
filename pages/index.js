import React from "react";
import { connect } from "react-redux";
import Layout from "../components/layout.js";
import Card from "../components/card.js";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    // store.dispatch();
    return { isServer };
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <Layout>
        <Card />
      </Layout>
    );
  }
}

export default connect()(Index);
