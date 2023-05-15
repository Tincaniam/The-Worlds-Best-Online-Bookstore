// Desc: Helper functions for the client side

// helper function to normalize date format
function normalizeDate (date) {
    let dateParts = date.split(/[-/\.]/);
    console.log(dateParts);

    if (dateParts.length !== 3) return date;

    // Reverse the date parts to get YYYY-MM-DD format
    if ((dateParts[2].length === 4) || (dateParts[0].length === 1 && dateParts[1].length === 1)) {
        dateParts = [dateParts[2], dateParts[1], dateParts[0]];
    }
    console.log(dateParts);

    if (dateParts[0].length !== 4){
        dateParts[0] = '20' + dateParts[0];
    }
    if (dateParts[1].length === 1){
        dateParts[1] = '0' + dateParts[1];
    }
    if (dateParts[2].length === 1){
        dateParts[2] = '0' + dateParts[2];
    }
    return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
}

export { normalizeDate };



