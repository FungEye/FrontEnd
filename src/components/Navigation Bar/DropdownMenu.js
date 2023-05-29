function DropdownMenu(props) {

    // TODO change this from a select element, which is dependent on the
    // OS to one that we can style an derive functionality from.
    // But for now, it will suffice.

    let options = props.options;
    let id = props.id;
    let name = props.name;
    let optionsElements = options.map(x => (<option key={x} value={x}>{x}</option>))
    let firstOption = props.firstOption;
    return (
        <div>
            <select className="dropdown" name={name} id={id}>
                <option value="">{firstOption}</option>
                {optionsElements}
            </select>
        </div>
    )
}

export default DropdownMenu