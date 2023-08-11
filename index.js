
function superbowlWin(jsArray) {
    const winObj = jsArray.find(obj => obj.result === 'W');
    if (winObj) {
        return winObj.year;
    } else { 
        return undefined;
    }
}