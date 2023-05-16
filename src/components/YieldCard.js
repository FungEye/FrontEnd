import "./css/YieldCard.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import shroomPic from "../img/oyster.png";

function YieldCard(props) {
  let grow = props.grow;

  return (
    <div className="yield-card rounded-20 mt-15 ">
      <div className="yield-card-flex">
        <div className="yield-card-1st-column">
          <img className="img-100px" src={shroomPic} alt="shroom"></img>
          <ButtonPrimary text="history"></ButtonPrimary>
        </div>

        <div className="yield-card-2nd-column">
          <h2 className="ultra text-dark">Shiitake</h2>

          <p className="text-dark varela">
            pro tip for future me, do not leave the grow-kit in the sun, I think
            I could have harvested much more mushrooms if I respected the
            guidelines
            {" :("}.
          </p>
        </div>

        <div className="yield-card-3rd-column">
          <h2 className="text-dark varela">Total yield:</h2>
          <p className="text-dark varela">57.93 g</p>

          <ButtonPrimary text="recipes" />
        </div>
      </div>
      <div className="yield-card-yields-column">
        <h2 className="text-dark varela">Harvests:</h2>

        <h3 className="text-dark varela"> Harvested 34.71 g on 16.05.2023</h3>

        <h3 className="text-dark varela"> Harvested 23.22 g on 14.05.2023</h3>
      </div>
    </div>
  );
}
export default YieldCard;
