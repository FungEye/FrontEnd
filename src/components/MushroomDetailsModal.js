import "./css/MushroomDetailsModal.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import XButton from "./XButton";
import ConditionsCarousel from "./ConditionsCarousel";
import { useNavigate } from "react-router-dom";
function MushroomDetailsModal(props) {
  const navigate = useNavigate();

  if (!props.show) {
    return null;
  }

  let mushroom = props.mushroom;
  let setShow = props.setShow;
  let mushroomId = mushroom.id;
  let shroomdata = mushroom.idealConditionDtos;

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
              {mushroom.name}
            </div>
            <img
              className="md-picture rounded-20"
              src={mushroom.imageUrl}
              alt="mushroomicon"
            ></img>
          </div>
          <div className="md-modal-body-info row">
            <div id="md-modal-body-left" className="column jc-space-between">
              <div className="md-modal-info-text column text-dark">
                <div>
                  <b>Origin: </b>
                  {mushroom.origin}
                </div>
                <div className="md-description">
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
