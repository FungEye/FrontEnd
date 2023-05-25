function getTimeString(x) {
    let result = ``;
    result += `${x.hour}:`;
    if (x.minute < 10) {
        result += "0";
    }
    result += `${x.minute}`;
    return result;
}

function getDateString(x) {
    let result = "";
    if (x.day < 10) {
        result += "0";
    }
    result += `${x.day}/`;
    if (x.month < 10) {
        result += "0";
    }
    result += `${x.month}`;
    return result;
}

function getFullDateString(x) {
    let result = "";
    result += getDateString(x);
    result += "/";
    result += x.year;
    return result;
}

function getDateTimeString(x) {
    let result = "";
    result += getDateString(x);
    result += " - ";
    result += getTimeString(x);
    return result;
}

function getFullDateTimeString(x) {
    let result = "";
    result += getFullDateString(x);
    result += " - ";
    result += getTimeString(x);
    return result;
}

function getTodayDate() {
    const date = new Date();
    return {
        "day": date.getDate(),
        "month": date.getMonth()+1,
        "year": date.getFullYear()
    }
}


export { getTodayDate, getTimeString, getDateString, getFullDateString, getDateTimeString, getFullDateTimeString }