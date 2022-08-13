import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return (
    <div data-testid={props["data-testid"]} className={classes}>
      {props.children}
    </div>
  );
}

export default Card;
