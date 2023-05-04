import "./css/Button.css";

export default function Button(props) {
  const className = `button ${props.theme}`;

  return (
    <div className={className} onClick={props.onClick}>
      {props.text}
    </div>
  );
}
