module.exports ={
    getDateInFormat: function getDateInFormat(date){
        console.log('Date:',date)
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        console.log(`Year: ${year},Month: ${month},Day: ${day}`)
    }
}