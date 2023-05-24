function TextArea(props) {
    return (
        <div className="column">
            <label className="poppins text-dark"><b>{props.title}</b></label>
            <textarea value={props.value} onChange={props.onChange} rows={8} cols={40} className="textarea bg-light text-dark varela rounded-20"></textarea>
        </div>
    )
}

export default TextArea