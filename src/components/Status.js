import "./css/Status.css"

function Status(props) {

    const status = props.status;
    let classes = `${status} status row jc-center align-items-center text-dark rounded-10 very-slightly-faded border-dark`;

    return (
    <div className={classes}>
        {status}
    </div>
    )
}

export default Status