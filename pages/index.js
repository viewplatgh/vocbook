import Layout from "../components/layout.js";
import { withRouter } from "next/router";
import Markdown from "react-markdown";
import Card from "../components/card.js";

export default withRouter(props => (
  <Layout>
    <Card />
  </Layout>
));
