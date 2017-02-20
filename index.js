/**
djmblog.com calculator app 10/26/2016
http://danmckeown.info
v0.0.00001------DEPRECATED: for latest code see public/scripts/calcnode.js
 */

var React = require('react');
var ReactDOM = require('react-dom');

var HelloContained = React.createClass({
  render: function () {
    console.log('rct');
    return (
      <div>We love Barstow!</div>
    )
  }
});

var Hello = React.createClass({
  render: function () {
    return (
      <div><HelloContained /><HelloContained /></div>
    )
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <span className="button">
          {this.props.buttonLabel}
      </span>
    );
  }
});

var Panel = React.createClass({
  render: function() {
    return (
      <div className="cont">
          <Button buttonLabel='1' /><Button buttonLabel='2' />
      </div>
    );
  }
});

var DigitizrShard = React.createClass({
  render: function() {
   return (<div><Button buttonLabel='1' /></div>);
  }
});

var Digitizr = React.createClass({
  render: function() {
    var numberSet = [1,2,3,4,5];
    console.log('rendering in d');
    console.log(this.props.nSet);
     {numberSet.map(function(k){
 //  {numberSet.forEach(function(i){
       console.log(k);
       return (<div>___</div>);
     });}
  }
});

var DigitizrMini = React.createClass({
  render: function() {
       return (<div>___</div>);
     }
});

ReactDOM.render(<DigitizrMini nSet='1,2,3' />, document.getElementById('app'));
