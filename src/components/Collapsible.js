import "./css/Collapsible.css";
import "./css/General.css";
function Collapsible(props) {
  let width = props.width;
  let id = props.id;

  return (
    <div
      className="border-dark rounded-20 bg-light overflow-hidden"
      style={{ width: width + "px" }}
    >
      <button
        id={id}
        type="button"
        className="collapse-container bg-dark text-light poppins"
      >
        {props.text}
      </button>
      <div className="collapse-content rounded-bottom-20 bg-light text-dark column">
        {props.content}
      </div>
    </div>
  );
}

export default Collapsible;
