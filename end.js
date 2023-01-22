const  username = document.getElementById("username");
const  saveBtn = document.getElementById("saveBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveBtn.disabled = !username.value;
});


saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
};
