import "./css/Guide.css";
import "./css/General.css";
import cyclePic from "../img/lifecycle.png";

function Guide() {
  return (
    <div>
      <div className="cont-guide bg-black guide-page">
        <div className="cont-guide bg-light rounded-20">
          <h2 className="ultra">How to use FungEye?</h2>

          <p className="guide-p poppins text-dark">
            All you need is the grow-kit, and an account on FungEye to be able
            to track the growth of your mushrooms, and get valuable tips for
            your grows.
          </p>
        </div>

        <div className="cont-guide bg-light rounded-20">
          <img className="img-600px" src={cyclePic} alt="box" />
        </div>
        <div className="cont-guide bg-light rounded-20 ">
          <h2 className="ultra">How is FungEye going to help me?</h2>

          <p className="guide-p poppins text-dark">
            {" "}
            FungEye will track the temperature, humidity, CO2 and light within
            your box.
          </p>

          <p className="guide-p poppins text-dark">
            The recorded measurements will be compared to the optimal conditions
            your mushroom needs for each growth phase, and inform you on the
            actions you need to perform to ensure these optimal conditions.
          </p>
        </div>

        <div className="cont-guide bg-light rounded-20">
          <h2 className="ultra">What do I have to do?</h2>

          <p className="guide-p poppins text-dark">
            A step-by-step guide for users will be written here, when we will
            know more.
          </p>
        </div>
      </div>

      <div className="footer">Fungeye 2023</div>
    </div>
  );
}

export default Guide;
