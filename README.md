# SOFTWARE-STAR TRIVIA!

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-fundamentals/game-of-war)

## Description
Software Star trivia is a quiz-based game that allows openents (software  engineers) to test how much they know about the basics of development; HTML5, CSS3, Javascript, and DOM manipulation with a focus on debugging rather than coding and insustry/career-based preparation questions.

It is intended to test engineers that know the basics, on the nitty gritty of executing a project - before tackling more complicated concepts
Not only will it test the skills that are overlooked, but those that are assumed. Much of baseline coding can be done not knowing for sure what each thing means or how each thing works and while it may not seem like a problem at the time, when more complicated projects come it will be harder and harder to debug and also to write code that executes what you want from scratch or otherwise.

## Brief Example
  ![image](https://i.imgur.com/dUtaY4P.jpg)

## Features
1. BRONZE:  significant progress.
> The Bronze level includes a responsive self-scoring game where the user is able to test and score their knowledge on the basics of development. For this to be completed, tyling needs improvement

2. SILVER: in progress.
>1. Styling + positioning perfecion in CSS
>2. Debug display of user scores

3. Gold: INCOMPLETE
> 1. perfect Styling + positioning with CSS
> 2. add timer and progress bar
> 3. add multiplayer options
> 4. store questions in json file and remove from JS
> 5. section questions based off of topic and expand


## Technologies
>1. HTML5
>2. CSS3
>3. Javascript

### Prerequisites to Build - "Vanilla" PHP Front-End Game

Requirements for the software and other tools to build, test and push 
- [HTML, CSS, Javascript, and the DOM](https://www.w3schools.com/js/js_htmldom.asp)

### HTML and CSS

1. the HTML files  for the game isn't long code but extremely vital as everything is built based off of these containers.
Some major features included in the HTML is: 
> 1. DIV containers
> 2. buttons
> 2. text input form to gather input from user (username)

2. CSS is mainly responsible for the styling, but also positioning inluding things like hover effects, which shouldn't be confused with JavaScript functionality which can do things like change the property of an element (like the color of the container to red or green depending on the selection that the user makes)
CSS was not a highlight of this game, as functionality through vanilla PHP is the main focus, but there has been good progress made on a esponsive design for mobile, ipad, small desktop, and larger desktop.

### Javascript Functions
Javascript in this game operates mostly on functions for different portions of hte game that are called when other actions are done such as removing a a new random question from the questiona array and calling the function to give a new question after an answer is given. Where the functions are called is significant for the fluiid function of the game. Javadcript is also responsible for key functions like the colors changing based on the answer being correct/incorrect which involves DOM manipulation which will be covered below.

Below is a basic function used in the game. Within this basic function contains all of the information needed to start the game. This includes the question counter and scores which will both be dynamically updated, the questions (as well as the questions left after a random question is taken from the array). As ezplained before, the getNewQuestion function is invoked within this function (even though it is not defined until later on) because out of the available questions left, the player also would need a new question upon answering.

        startGame = () => {
          questionCounter = 0;
          score = 0;
          availableQuestions = [...questions];
          console.log(availableQuestions);
          getNewQuestion();
        };



## Manipulating the DOM
Manipulating the DOM is the most crucial part of the game because as the user continues the game, not only do the functions need to work but things other than the javvascript will need to be changed.
For example, in this below snippet:

    saveScore = e => {
        console.log("clicked the save button!");
        e.preventDefault();

        const score = {
            score: Math.floor(Math.random() * 100),
            name: username.value
        };
        highScores.push(score);
        highScores.push((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.assign("index.html");
    };
Because the user's score will be unique to that specific that game that was played, this can not be a predetermined number so based on the score, this number is then displayed in the HTML of the page all within one function in Javascript by manipulating the DOM.

Ways utilized DOM manipulation for the game
> 1. Changes properties of HTML elments from JS file
> 2. Create HTMLS classLists
> 3. Change CSS style propoerties
> 4. Use API storage to gather and store input/data from users


### Installation Instructions / Getting Started
To set up Sofware Star Trivia application, follow these steps:
>(1) FORK this repository
>(2) CLONE this repository to your local
>(3) NEW local branch
>(4) OPEN, edit, and commit!

### CONTRIBUTION GUIDELINES
This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements

LINKS:
> 1. Main repository: (https://github.com/TREYCSE/triviaGame)
> 2. Issue Tracker: (https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=0)




## Built With
  - [Contributor Covenant](https://www.contributor-covenant.org/) - Used
    for the Code of Conduct
  - [Creative Commons](https://creativecommons.org/) - Used to choose
    the license

## Versioning
We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors
  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

