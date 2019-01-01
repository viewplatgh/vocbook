const Card = props => {
  const page = props.pages[props.index];
  const word = page.words[page.index];
  const remClass = [
    "icon has-text-danger",
    "icon has-text-warning",
    "icon has-text-success"
  ][word.remb];
  return (
    <div className="columns is-mobile">
      <div className="column is-3">
        <div
          style={{
            textAlign: "center",
            marginTop: 100
          }}
        >
          <a
            className="button is-white"
            onClick={() => {
              props.previousWord();
            }}
          >
            <i className="fas fa-3x fa-angle-left" style={{ color: "#999" }} />
          </a>
        </div>
      </div>
      <div className="column">
        <div className="tile is-ancestor">
          <div className="tile is-vertical" style={{ margin: "auto" }}>
            <div className="tile">
              <div
                style={{
                  minHeight: 368,
                  paddingTop: 36,
                  paddingBottom: 36,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <p style={{ textAlign: "center" }}>
                  <span className={remClass}>
                    <i className="fas fa-circle" />
                  </span>
                </p>
                <p
                  className="title"
                  style={{ textAlign: "center", fontSize: 48 }}
                >
                  {word.term}
                </p>
                <p style={{ minHeight: 50 }}>&nbsp;</p>
                <div className="familiarity">
                  <ul>
                    <li>
                      <a
                        className="button is-success"
                        onClick={e => {
                          props.editWord({ remb: 2 });
                        }}
                      >
                        <i className="fas fa-check" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="button is-warning"
                        onClick={e => {
                          props.editWord({ remb: 1 });
                        }}
                      >
                        <i className="fas fa-question" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="button is-danger"
                        onClick={e => {
                          props.editWord({ remb: 0 });
                        }}
                      >
                        <i className="fas fa-times" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tile pages">
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
                        onClick={e => props.goPage({ index })}
                      >
                        {index}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-3">
        <div
          style={{
            textAlign: "center",
            marginTop: 100
          }}
        >
          <a
            className="button is-white"
            onClick={() => {
              props.nextWord();
            }}
          >
            <i className="fas fa-3x fa-angle-right" style={{ color: "#999" }} />
          </a>
        </div>
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
            margin: 12px;
          }
          .familiarity > ul > li > a {
            font-size: 24px;
          }
          .pages {
            text-align: center;
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
    </div>
  );
};

export default Card;
