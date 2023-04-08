const newYears = '1 Jan 2024';

console.log(newYears)

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    console.log(newYearsDate - currentDate);
    console.log(currentDate);
}

//initial call
countdown();

setInterval(countdown, 1000);
