# SOFTWARE-STAR TRIVIA!

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-fundamentals/game-of-war)

## Description
What your project is / should be used for
What problem(s) your projects solves

Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
Follow this mini-lesson on writing documentation for your project

You want to provide your readers with all of the information that they need to know, but no more. Unlike some other forms of writing, documentation should be clear, concise, and to the point. Additionally, it should be written in a way to appeal both to normal users (who don't know or care how the code works) and developers (who may want to evaluate or contribute to your code).

Software Star trivia is a quiz-based game that allows openents (software  engineers) to test how much they know about the basics of development; HTML5. CSS3. Javascript, and DOM manipulation with a focus on debugging rather than coding and insustry/career-based preparation questions.

It is intended to test engineers that know the basics, on the nitty gritty of executing a project - before tackling more complicated concepts
Not only will it test the skills that are overlooked, but those that are assumed. Much of baseline coding can be done not knowing for sure what each thing means or how each thing works and while it may not seem like a problem at the time, when more complicated projects come it will be harder and harder to debug and also to write code that executes what you want from scratch or otherwise.

## Brief Example
This could be a code snippet showing how your project should be used (if it is meant to be integrated into another app)
This could be a screenshot of your project running in the browser (if it is a stand-alone application)

## List of Features / User Stories
This typically will be a short list of the features / user stories that you planned during the development phase of the project
To provide more detail, you can show how you categorized these features into Bronze (MVP), Silver, and Gold Levels and indicate which features you complete / have yet to complete

## List of Technologies Used
Often you will want to list the technologies you used to create the project.
This typically would consist of all primary languages, frameworks, and libraries your app is composed of
This is particularly important when it comes to recruiters scanning your projects for keywords

### Prerequisites to Build

Requirements for the software and other tools to build, test and push 
- [DOM](https://git.generalassemb.ly/dc-wdi-fundamentals/objects-intro)
- [HTML, CSS, Javascript](https://git.generalassemb.ly/dc-wdi-fundamentals/javascript-oop/blob/master/object-oriented-javascript.md)

### CSS
If we want to create our own classes, all we need is a name for our class and a definition of the information and behavior we want to encapsulate in our class. The information and behavior we want to describe with our class has a special name: an attribute. There are two kinds of attributes: data attributes and procedural attributes (more commonly called methods).

### Javascript
Methods are the "functions of Classses" used methods to initialize, modify, or act on an objects' internal state. For example:
Here's an example of how methods can be used in a class in the Game of War.


    startGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [...questions];
      console.log(availableQuestions);
      getNewQuestion();
    };

startGame();shuffle () {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue;
      };
    };

## Manipulating the DOM

    incrementScore = num => {
      score +=num;
      scores.innerText = score;
    };
Ways to manipulate the DOM for the game..

> (1) Use the DOM to ...
> (2) 


### Installation Instructions / Getting Started

This section should walk a reader, step by step, through the process of setting up your project
For a tool meant to be integrated into other projects, this would likely outline the process of installing and accessing this tool in your project
For an application, this would likely outline the process of forking, cloning, and starting the app locally

Suggested Ways to Get Started
•	Create your bronze, silver, and gold plan.
•	Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use a whiteboard!
•	Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
•	Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know… procrastinating.
•	Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
•	Make it work, make it good, make it fast. Don’t get hung up on only saving or writing code that is good code. Get it working first, even if it means writing bad or ugly code. Once it’s working, come back and refactor!
•	Consult documentation resources (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
•	Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

### CONTRIBUTION GUIDELINES
This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements

Good links to include are:
A link to the project's main repository: (https://github.com/TREYCSE/triviaGame)
A link to the project's issue tracker

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


## Acknowledgments

  - Hat tip to anyone whose code is used
  - Inspiration
  - etc

