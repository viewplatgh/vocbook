import { connect } from "react-redux";
import { nextWord } from "../actions";
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
      <div className="pages">
        <ul>
          {props.pages.map((e, index) => {
            return (
              <li key={`k${index}`}>
                <a
                  className={
                    props.index === index
                      ? "button is-light is-active"
                      : "button"
                  }
                  onClick={e => {
                    e.stopPropagation();
                  }}
                >
                  {index}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .familiarity {
            text-align: center;
          }
          .familiarity > ul {
            list-style: none;
          }
          .familiarity > ul > li {
            display: inline;
            margin: 14px;
          }
          .familiarity > ul > li > a {
            font-size: 24px;
          }
          .pages {
            margin-top: 78px;
            text-align: center;
          }
          .pages > ul {
            list-style: none;
            margin-left: 32px;
            margin-right: 32px;
          }
          .pages > ul > li {
            display: inline;
            margin: 5px;
          }
          .pages > ul > li > a {
            margin-top: 10px;
          }
        `}
      </style>
    </article>
  );
};

export default connect()(Card);
