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
            to begin tracking the growth of your mushrooms, and get valuable
            tips for your grows.
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
            1. After registering, navigate to the Mushrooms page, and select the
            species you wish to grow.
            <br></br>
            <br></br>
            2. Click "Pick" on your preferred species. This will send you to the
            Box Selection page.
            <br></br>
            <br></br>
            3. Click "Pick" on the box you wish to start the grow within.
            Otherwise, create a new box - you will need to enter the EUI for it.
            <br></br>
            <br></br>
            4. Congratulations! Your grow has started. A confirmation of this
            will be displayed.
          </p>
        </div>
      </div>

      <div className="footer">Fungeye 2023</div>
    </div>
  );
}

export default Guide;
