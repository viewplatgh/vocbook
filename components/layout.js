import { Fragment } from "react";
import Head from "next/head";
import Header from "./header";

const Layout = props => (
  <Fragment>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Vocabulary book</title>
    </Head>
    <div className="navbar" />
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-12">
          <div className="tile" />
          <div className="tile">
            <div className="tile is-parent">{props.children}</div>
          </div>
          <div className="tile" />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Layout;
