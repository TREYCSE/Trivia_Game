const highScoresList = document.getElementsByClassName("flex-column");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

//highScoresList.innerHTML = highScores returning as empty objects for some reason - is this where the bug is ^^

console.log(
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}));

/*

.join("");

*/