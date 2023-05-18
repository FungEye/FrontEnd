import "./css/MushroomDetailsModal.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import XButton from "./XButton";
import ConditionsCarousel from "./ConditionsCarousel";
import { useNavigate } from "react-router-dom";
function MushroomDetailsModal(props) {
  const navigate = useNavigate();

  let shroomdata = {
    temperature: [
      {
        phase: "spawn",
        temperature: [24, 28],
      },
      {
        phase: "fruiting",
        temperature: [26, 27],
      },
      {
        phase: "putinhing",
        temperature: [22, 24],
      },
    ],
    humidity: [
      {
        phase: "spawn",
        humidity: [90, 100],
      },
      {
        phase: "fruiting",
        humidity: [80, 86],
      },
      {
        phase: "putinhing",
        humidity: [86, 94],
      },
    ],
    co2: [
      {
        phase: "spawn",
        co2: [300, 400],
      },
      {
        phase: "fruiting",
        co2: [580, 670],
      },
      {
        phase: "putinhing",
        co2: [300, 350],
      },
    ],
    light: [
      {
        phase: "spawn",
        light: [50, 100],
      },
      {
        phase: "fruiting",
        light: [150, 170],
      },
      {
        phase: "putinhing",
        light: [120, 150],
      },
    ],
  };

  if (!props.show) {
    return null;
  }

  let mushroom = props.mushroom;
  let setShow = props.setShow;
  let mushroomId = 69;

  return (
    <div className="md-modal">
      <div className="md-modal-content">
        <div className="md-modal-header align-items-center bg-dark row jc-space-between text-light poppins very-slightly-faded">
          <div>Mushroom Details</div>
          <XButton onClick={() => setShow(false)} />
        </div>
        <div className="md-modal-body bg-light column very-slightly-faded">
          <div className="md-modal-body-top row align-items-center jc-space-between">
            <div className="ultra md-modal-body-title text-dark">
              {mushroom.shroomname}
            </div>
            <img
              className="img-100px"
              src={mushroom.imgsrc}
              alt="mushroomicon"
            ></img>
          </div>
          <div className="md-modal-body-info row jc-space-between">
            <div id="md-modal-body-left" className="column jc-space-between">
              <div className="md-modal-info-text column text-dark">
                <div>
                  <b>Origin: </b>
                  {mushroom.origin}
                </div>
                <div>
                  <b>Description: </b>
                  {mushroom.description}
                </div>
              </div>
              <div className="row btns jc-center">
                <ButtonSecondary text="Back" onClick={() => setShow(false)} />
                <ButtonPrimary
                  text="Pick"
                  onClick={() => navigate(`/boxes/${mushroomId}`)}
                />
              </div>
            </div>
            <ConditionsCarousel conditions={shroomdata} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MushroomDetailsModal;
