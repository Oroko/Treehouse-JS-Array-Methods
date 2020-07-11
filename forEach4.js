const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayAbbreviations = [];

days.forEach(day => {
    let newLetters = day.slice(0,2); // you could also use substring() or substr()
    dayAbbreviations.push(newLetters);
});

console.log(dayAbbreviations);