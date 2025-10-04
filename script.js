function validateGrades(grades) {
  if (Array.isArray(grades) === false) {
    return "Error : input is must be array";
  }

  if (grades.length === 0) {
    return "Error: array cannot be empty";
  }

  let validGrades = [];
  let errors = [];

  for (let index = 0; index < grades.length; index++) {
    let currentGrade = grades[index];
    console.log(currentGrade.subject);

    if (typeof currentGrade !== "object") {
      errors.push("Item must be object");
    }

    if (currentGrade.subject === undefined) {
      errors.push("Subject is missing");
    }

    if (currentGrade.subject === "") {
      errors.push("Invalid name to the subjects");
    }
  }

  return {
    errors: errors,
  };
}

// Test Case 1: Valid Input
const validGradesFirstInput = [
  { subject: "Mathematics", score: 95 },
  { subject: "Physics", score: 87 },
  { subject: "Chemistry", score: 92 },
  { subject: "Biology", score: 88 },
];

const mixedGrades = [
  { subject: "Math", score: 95 },
  { subject: "", score: 80 }, // Invalid: empty subject
  { subject: "Physics", score: 150 }, // Invalid: score out of range
  "Not an object", // Invalid: not an object
  { subject: "Chemistry" }, // Invalid: missing score
  { subject: "Biology", score: "85" }, // Invalid: score not a number
  { subject: "History", score: 78 }, // Valid
];

console.log("Testing first case input");
const resultForFirstCase = validateGrades(mixedGrades);
console.log({ resultForFirstCase });
