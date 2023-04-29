import "./css/General.css";
import "./css/MushroomCard.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";


function MushroomCard() {
    return (
        <div className="mushroom-card bg-light rounded-20 column jc-center slightly-faded">
            <div className="row jc-space-between w-100 mw-100 mc-top-row">
                <div className="ultra text-dark align-self-center mc-mushroom-name">Pioppino</div>
                <img className="mushroom-card-image" src="https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImIwNTMzOTI0Njk2ZGJlOTIzZTUyMDdlYWEyMjM5NGY3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=7bb476fd5c2f284f475942393f2edca779877dd2fb10e2574b78ae751080535c" alt="mushroom"/>
            </div>
            <div className="row jc-space-evenly w-100">
                <ButtonSecondary text="Details"/>
                <ButtonPrimary text="Pick"/>
            </div>
        </div>
    )
}

export default MushroomCard;