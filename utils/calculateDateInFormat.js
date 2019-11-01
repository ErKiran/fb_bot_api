module.exports = {
    getDateInFormat: function getDateInFormat(date) {
        console.log('Date:', date)
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`
    }
}