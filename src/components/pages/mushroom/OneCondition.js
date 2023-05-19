function OneCondition(props) {

    let title = props.title;
    let measurement = props.measurement;
    let unit = props.unit;


    return (
        <div className="border-dark">
            <h2 className="ultra text-dark">{title}</h2>
            <p>{measurement == null ? "? " : measurement} {unit}</p>
        </div>)

}

export default OneCondition;