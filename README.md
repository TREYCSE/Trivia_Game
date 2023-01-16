#SOFTWARE-STAR TRIVIA!

Software Star trivia is a quiz-based game that allows openents (software  engineers) to test how much they know about the basics of development; HTML5. CSS3. Javascript, and DOM manipulation with a focus on debugging rather than coding and insustry/career-based preparation questions. But instead of testing based off of difficult things, 

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-fundamentals/game-of-war)

## How to Play

Self-scoring Trivia
Pre-load your app with some questions and answers.
Test the user’s wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how right you are!
Bonus:
•	Add time-based scoring
•	Track scores across games (even if the page is reloaded)
•	Allow users to compete against each other on a high-score board.
Here’s an example from a previous student

### Prerequisites to Build

Requirements for the software and other tools to build, test and push 
- [DOM](https://git.generalassemb.ly/dc-wdi-fundamentals/objects-intro)
- [HTML, CSS, Javascript](https://git.generalassemb.ly/dc-wdi-fundamentals/javascript-oop/blob/master/object-oriented-javascript.md)

## Intent of the Game
It is intended to test engineers that know the basics, on the nitty gritty of executing a project - before tackling more complicated concepts
Not only will it test the skills that are overlooked, but those that are assumed. Much of baseline coding can be done not knowing for sure what each thing means or how each thing works and while it may not seem like a problem at the time, when more complicated projects come it will be harder and harder to debug and also to write code that executes what you want from scratch or otherwise.

### Getting Started
Suggested Ways to Get Started
•	Create your bronze, silver, and gold plan.
•	Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use a whiteboard!
•	Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
•	Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know… procrastinating.
•	Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
•	Make it work, make it good, make it fast. Don’t get hung up on only saving or writing code that is good code. Get it working first, even if it means writing bad or ugly code. Once it’s working, come back and refactor!
•	Consult documentation resources (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
•	Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

### HTML

Constructors are special methods that will be invoked whenever we create a new instance of our class. If our class is what defines our template, the constructor method is what fills it in for a particular instance.
Here is an example of how a constructor is used to code the game: 

       constructor(cards = newDeck()) {
        this.cards = cards;
      };
### CSS
If we want to create our own classes, all we need is a name for our class and a definition of the information and behavior we want to encapsulate in our class. The information and behavior we want to describe with our class has a special name: an attribute. There are two kinds of attributes: data attributes and procedural attributes (more commonly called methods).

### Javascript
Methods are the "functions of Classses" used methods to initialize, modify, or act on an objects' internal state. For example:
Here's an example of how methods can be used in a class in the Game of War.

    shuffle () {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue;
      };
    };

## Manipulating the DOM

Object oriented programming gives use three major benefits:

> (1) Encapsulation: The complexity of our objects is hidden and a user can interact with a well defined set of methods. We can redefine internal behavior without changing anything externally - a huge benefit for refactoring.
(2) Modularity: Because the interface (set of methods) for an object is well defined, it is easy to exchange one object for another and reorganize objects without breaking them.
(3) Inheritance: Object Oriented design lets certain classes inherit from, or borrow the behavior of another, more general class. The inheriting class can add and overwrite inherited methods.

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

