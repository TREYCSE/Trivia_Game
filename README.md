# SKY TRAVEL COMPANION - storybook libraries

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-react-redux/component-library-project)

## Description
Sky travel companion UI design is built using React and Storybook. There are three pages


## Mock App - Sky Travel Companion
  ![image](https://i.imgur.com/EOFHA37.png)

## Features
1. BRONZE:  significant progress.
> 1. Make the app functional
> 2. make the app look most like the mock - in simplest form

2. SILVER: in progress.
>1. add additional festures
>2. build upon library

3. Gold: INCOMPLETE‼
> 1. 
> 2. 


## Technologies
>1. React
>2. Storybook

### Prerequisites to Build - "Vanilla" PHP Front-End Game

Requirements for the software and other tools to build, test and push 
- [HTML, CSS, Javascript, and the DOM](https://www.w3schools.com/js/js_htmldom.asp)

### REACT 

React allows developers to spend less time making tedious and/or repetitive codes and adjustments across projects by allowing pieces of code to be stored into a library.
Some major features included in the HTML is: 
> 1. button
> 2. headers
> 2. pages
> 4. text-input (collect password from users)



#### Component Libraries
Javascript in this game operates mostly on functions for different portions of the game that are called when other actions are done such as removing a a new random question from the questions array and calling the function to give a new question after an answer is given. Where the functions are called is significant for the fluiid function of the game. Javascript is also responsible for key functions like the colors changing based on the answer being correct/incorrect which involves DOM manipulation which will be covered below.

Below is a basic function used in the game. Within this basic function contains all of the information needed to start the game. This includes the question counter and scores which will both be dynamically updated, the questions (as well as the questions left after a random question is taken from the array). As ezplained before, the getNewQuestion function is invoked within this function (even though it is not defined until later on) because out of the available questions left, the player also would need a new question upon answering.

        startGame = () => {
          questionCounter = 0;
          score = 0;
          availableQuestions = [...questions];
          console.log(availableQuestions);
          getNewQuestion();
        };



## Storybook
Manipulating the DOM is the most crucial part of the game because as the user continues the game, not only do the functions need to work but things other than the Javascript will need to be changed.
For example, in this below snippet:

    saveScore = e => {
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

