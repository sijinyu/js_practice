function solution({ survey, choices }) {
  const indicators = ["RT", "CF", "JM", "AN"];
  let result = ["R", "C", "J", "A"];
  const answer = survey.reduce((acc, v, i) => {
    const [fristType, secondType] = v.split("");

    if (choices[i] >= 1 && choices[i] <= 3) {
      acc[fristType] = (acc[fristType] || 0) + (4 - choices[i]);
    } else {
      acc[secondType] = (acc[secondType] || 0) + (choices[i] - 4);
    }
    return acc;
  }, {});
  indicators.map((v, i) => {
    const [fristType, secondType] = v.split("");
    if (answer[fristType] === undefined) answer[fristType] = 0;
    if (answer[secondType] === undefined) answer[secondType] = 0;
    if (answer[secondType] > answer[fristType]) result[i] = secondType;
  });
  return result.join("");
}

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

console.log(solution({ survey, choices }));
