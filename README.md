# SOFTWARE-STAR TRIVIA!

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-fundamentals/game-of-war)

## Description
Software Star trivia is a quiz-based game that allows openents (software  engineers) to test how much they know about the basics of development; HTML5. CSS3. Javascript, and DOM manipulation with a focus on debugging rather than coding and insustry/career-based preparation questions.

It is intended to test engineers that know the basics, on the nitty gritty of executing a project - before tackling more complicated concepts
Not only will it test the skills that are overlooked, but those that are assumed. Much of baseline coding can be done not knowing for sure what each thing means or how each thing works and while it may not seem like a problem at the time, when more complicated projects come it will be harder and harder to debug and also to write code that executes what you want from scratch or otherwise.

## Brief Example - SCREENSHOT
https://i.imgur.com/dUtaY4P.jpg

## List of Features / User Stories
This typically will be a short list of the features / user stories that you planned during the development phase of the project
To provide more detail, you can show how you categorized these features into Bronze (MVP), Silver, and Gold Levels and indicate which features you complete / have yet to complete

## List of Technologies Used
Often you will want to list the technologies you used to create the project.
This typically would consist of all primary languages, frameworks, and libraries your app is composed of
This is particularly important when it comes to recruiters scanning your projects for keywords

### Prerequisites to Build - "Vanilla"

Requirements for the software and other tools to build, test and push 
- [DOM](https://git.generalassemb.ly/dc-wdi-fundamentals/objects-intro)
- [HTML, CSS, Javascript](https://git.generalassemb.ly/dc-wdi-fundamentals/javascript-oop/blob/master/object-oriented-javascript.md)

### CSS
Responsive design for mobile, ipad, small desktop, and desktop.

### Javascript

This is a basic function used in the game. Within this basic function contains all of the information needed to start the game.
This includes the question counter and scores which will both be dynamically updated, the questions (as well as the questions left after a random question is taken from the array).
The getNewQuestion function is invoked within this function (even though it is not defined until later on) because out of the available questions left, the player also would need a new question upon answering.

CODE SNIPPET:
    startGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [...questions];
      console.log(availableQuestions);
      getNewQuestion();
    };


## Manipulating the DOM

    incrementScore = num => {
      score +=num;
      scores.innerText = score;
    };

Ways utilized DOM manipulation for the game

> (1)
> (2) classList
> (2) Arrays


### Installation Instructions / Getting Started
To set up Sofware Star Trivia application, follow these steps:

>(1) FORK this repository
>(2) CLONE this repository to your local
>(3) NEW BRANCH in your local 
>(4) OPEN, edit, and commit!

### CONTRIBUTION GUIDELINES
This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements

LINKS:
Main repository: (https://github.com/TREYCSE/triviaGame)
Issue Tracker: issue tracker



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

