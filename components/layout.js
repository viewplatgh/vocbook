import { Fragment } from "react";
import Head from "next/head";
import Header from "./header";

const Layout = props => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
      <title>Vocabulary book</title>
    </Head>
    <div className="navbar">
      <Header />
    </div>
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
