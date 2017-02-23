**readme for DJM Calculator**

#### version 0.3

copyright February 2017

*by [Dan McKeown](http://danmckeown.info)*

### try it out at: http://danmckeown.info/calculator

### screencast about djmCalc: https://www.youtube.com/watch?v=_0BBykrdKW0

djmCalc is Free Software [Licensed](https://github.com/pacificpelican/djmCalc/blob/master/LICENSE) under ISC License

The calculator has three types of buttons:

* Mutating Mode Buttons: The buttons at the top that set themselves up for mutation when pressed--that is, selecting a button makes it able to be set by a Number or Operator button 
* Number Buttons: Allows digits to be added to either of the Number Mutating Mode Buttons
* Operator Buttons: Allows operator to be selected for the Operator Mutating Mode Button (add, multiply, etc.), also allows selection of 'real-time' operators like equals [which causes an answer to the values currently in the mutating mode buttons to appear in the fourth 'answer' button] and Prime [which displays a theorectical and algorithmic answer to the question of whether the value in the 'answer' button is a prime number] and "Clear" which causes the value of whichever of the two Mutating Mode Number Buttons is currently selected (in mutating mode), if either, to be set to 0.

The calculator is written in JavaScript and depends on [ReactJS](https://facebook.github.io/react/) components for layout and [jQuery](http://jquery.com/) events for DOM operations.

**Setup**
You can get the code for DJM Calc by cloning [this Git project](https://github.com/pacificpelican/djmCalc).  When you have it in your directory, you will need to use [NPM](https://www.npmjs.com/) to install dependencies:
At the terminal, try this:

`git clone https://github.com/pacificpelican/djmCalc.git`

`cd djmCalc`

`npm install` or `sudo npm install`

When you have done that, start the server using an NPM script:

`npm run start`

You should then be able to visit the dev server at http://localhost:3000
