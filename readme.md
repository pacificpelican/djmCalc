**readme for DJM Calculator**
http://danmckeown.info/calculator

*version 0.3*
copyright February 2017
Licensed under ISC License

*by [Dan McKeown](http://danmckeown.info)*

The calculator has three types of buttons:

-Mutating Mode Buttons: The buttons at the top that set what should be set by other buttons
-Number Buttons: Allows digits to be added to selected top Buttons
-Operator Buttons: Allows operator to be selected, along with operators like = and Prime?

The calculator is written in JavaScript and depends on [ReactJS](https://facebook.github.io/react/) and [jQuery](http://jquery.com/).

**Setup**
You can get the code for DJM Calc by cloning this Git project.  When you have it in your directory, you will need to use NPM to install dependencies:

`
git clone <GitHub-project-URI>
cd djmCalc
sudo npm install
`

When you have done that, start the server using an NPM script:

`
npm run start
`

You should then be able to visit the dev server at http://localhost:3000
