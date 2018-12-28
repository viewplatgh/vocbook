const Card = () => (
  <article className="tile is-child">
    <p className="title" style={{ textAlign: "center", fontSize: 48 }}>
      middle
    </p>
    <div className="familiarity">
      <ul>
        <li>
          <a className="button is-success">✔</a>
        </li>
        <li>
          <a className="button is-warning">?</a>
        </li>
        <li>
          <a className="button is-danger">☓</a>
        </li>
      </ul>
    </div>
    <style jsx>
      {`
        .familiarity {
          text-align: center;
        }
        ul {
          list-style: none;
        }
        ul > li {
          display: inline;
          margin: 1em;
        }
        ul > li > a {
          font-size: 24px;
        }
      `}
    </style>
  </article>
);

export default Card;
