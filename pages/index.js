import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Layout from "../components/layout.js";
import Card from "../components/card.js";

export default connect()(
  withRouter(props => (
    <Layout>
      <Card />
    </Layout>
  ))
);
