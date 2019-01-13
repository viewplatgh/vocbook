import React from "react";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";

const Show = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.show.summary }} />
    <img src={props.show.image.medium} />
  </Layout>
);

Show.getInitialProps = async function({ ctx }) {
  const { id } = ctx.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Show;
