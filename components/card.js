import { connect } from "react-redux";
import { nextWord } from "../actions.js";
const Card = props => {
  const page = props.pages[props.index];
  const word = page.words[page.index];
  const remClass = [
    "icon has-text-danger",
    "icon has-text-warning",
    "icon has-text-success"
  ][word.remb];
  return (
    <article
      className="tile is-child"
      style={{ minHeight: 368, paddingTop: 36, paddingBottom: 36 }}
      onClick={() => {
        props.nextWord();
      }}
    >
      <p style={{ textAlign: "center" }}>
        <span className={remClass}>
          <i className="fas fa-circle" />
        </span>
      </p>
      <p className="title" style={{ textAlign: "center", fontSize: 48 }}>
        {word.term}
      </p>
      <p style={{ minHeight: 50 }}>&nbsp;</p>
      <div className="familiarity">
        <ul>
          <li>
            <a
              className="button is-success"
              onClick={e => {
                e.stopPropagation();
                props.editWord({ remb: 2 });
                props.nextWord();
              }}
            >
              <i className="fas fa-check" />
            </a>
          </li>
          <li>
            <a
              className="button is-warning"
              onClick={e => {
                e.stopPropagation();
                props.editWord({ remb: 1 });
                props.nextWord();
              }}
            >
              <i className="fas fa-question" />
            </a>
          </li>
          <li>
            <a
              className="button is-danger"
              onClick={e => {
                e.stopPropagation();
                props.editWord({ remb: 0 });
                props.nextWord();
              }}
            >
              <i className="fas fa-times" />
            </a>
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
            margin: 14px;
          }
          ul > li > a {
            font-size: 24px;
          }
        `}
      </style>
    </article>
  );
};

export default connect()(Card);
