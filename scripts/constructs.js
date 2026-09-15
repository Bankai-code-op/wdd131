// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
            console.log(studentReport[i]);
    }
}

// while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// for...of loop
for (let item of studentReport) {
    if (studentReport < LIMIT) {
        console.log(item);
    }
}

const DAYS = 7;
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();

for (let i = 0; i < DAYS; i++) {
  const dayIndex = (today + i) % 7;
  console.log(dayNames[dayIndex]);
}