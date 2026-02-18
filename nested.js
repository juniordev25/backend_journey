let students = [
    [90, 100, 75],
    [80, 75, 90]
]

let classTotal = 0;
let totalGradesCount = 0;
let highestScore = 0;
// outerloop
for (let i = 0; i < students.length; i++){
   let totalScores = 0;

   for (let j = 0; j < students[i].length; j++){
    let currentGrade = students[i][j];

    totalScores += currentGrade;
    classTotal += currentGrade;
    totalGradesCount++;

    if (currentGrade > highestScore){
        highestScore = currentGrade;
    }
   }
   
   let average = totalScores / students[i].length;
   console.log(`Student ${i + 1} Average: ${average}`)
  
}

let classAverage = classTotal / totalGradesCount;

console.log("Class Average: ", classAverage);
console.log("Highest Score: ", highestScore);