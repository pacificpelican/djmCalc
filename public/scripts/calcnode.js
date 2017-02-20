/**
djmblog.com calculator app calcnode.js
copyright 2016-2017
http://danmckeown.info/calculator
 */

const CalcAppVersion = "v0.3.0";

var AddTwo = function(addant1, addant2)
    {
    	return addant1 + addant2;
    }

let AddN = function(...numbers)
	{
		let sum = 0;
		for (let i=0; i<numbers.length; i++)
		{
			sum = sum + numbers[i];
			console.log("sum: " + sum);
		}
		return sum;
	}

var SubtractTwo = function(scalar, subtractor)
    {
    	return scalar - subtractor;
    }

let MultiplyN = function(...factors)
{
    var product = 1;
    for (let i=0; i<factors.length; i++)
    {
        product = product * factors[i];
    }
    return product;
}

let MultiplyTwo = function(factor1, factor2)
{
    return factor1 * factor2;
}

let PowerTwo = function(base, exponent)
{
    return Math.pow(base, exponent);
}

let DivideTwo = function(dividend, divisor)
{   //  will return the result of the first number divided by the second number
    return (dividend / divisor);
}

var HelloContained = React.createClass({
  render: function() {
    console.log('rct');
    return (
      <div>We love Barstow!</div>
    )
  }
});

var Hello = React.createClass({
  render: function() {
    return (
      <div><HelloContained /><HelloContained /></div>
    )
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <span className="button" id={this.props.buttonLabel}>
          {this.props.buttonLabel}
      </span>
    );
  }
});

var CreditsPanel = React.createClass({
  render: function() {
    return(
      <div id='calcDivide' className='operators'><div className="calcLink"><a href="http://danmckeown.info/calculator">Calculator App</a></div><br /><div id="digDiv"></div><div id="dmDiv">{[" version " + CalcAppVersion + " by "]}<a href="http://danmckeown.info">Dan McKeown</a></div></div>
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

var ButtonPlus = React.createClass({
  render: function() {
   return (<div id='calcPlus' className='operators'><Digitizr nSet={["plus"]} /> </div>);
  }
});

var ButtonMinus = React.createClass({
  render: function() {
   return (<div id='calcMinus' className='operators'><Digitizr nSet={["minus"]} /></div>);
  }
});

var ButtonTimes = React.createClass({
  render: function() {
   return (<div id='calcMultiply' className='operators'><Digitizr nSet={["times"]} /></div>);
  }
});

var ButtonDivide = React.createClass({
  render: function() {
   return (<div id='calcDivide' className='operators'><Digitizr nSet={["divide"]} /></div>);
  }
});

var ButtonExponent = React.createClass({
  render: function() {
   return (<div id='calcExponent' className='operators'><Digitizr nSet={["exponent"]} /></div>);
  }
});

var ButtonClear = React.createClass({
  render: function() {
   return (<div id='calcClear' className='operators'><Digitizr nSet={["Clear"]} /></div>);
  }
});

var ButtonEquals = React.createClass({
  render: function() {
   return (<div id='calcEquals' className='operators'><Digitizr nSet={["equals"]} /></div>);
  }
});

var ButtonPrime = React.createClass({
  render: function() {
   return (<div id='calcPrime' className='operators'><Digitizr nSet={["Prime"]} /></div>);
  }
});

var Digitizr = React.createClass({
  render: function() {
    var numberSet = this.props.nSet;
    console.log('rendering in d');
    console.log(this.props.nSet); 
    return(<div className="Digitizr">
      {numberSet.map(function(k){
      {console.log(k);}
      {var kLink = "#command/" + k;}
      return <a href={kLink} key={k.toString()}><Button key={k.toString()} buttonLabel={k} /></a>;
      })}
      </div>)
  }
});

var NumberDisplay = React.createClass({
  render: function() {
    return(
      <div id='NumberDisplay' className='operators'><span id='numberReadoutId' className='displayOutput'>0</span></div>
    );
  }
});

var NumberDisplay0 = React.createClass({
  render: function() {
    return(
      <div id='NumberDisplay0' className='operators'><span id='numberReadout0Id' className='displayOutput'>0</span></div>
    );
  }
});

var OperatorDisplay = React.createClass({
  render: function() {
    return(
      <div id='OperatorDisplay' className='operators'><span id='operatorReadoutId' className='displayOutput'>+</span></div>
    );
  }
});

var AnswerDisplay = React.createClass({
  render: function() {
    return(
      <div id='AnswerDisplay' className='results'><span id='answerReadoutId' className='displayOutput'>0</span></div>
    );
  }
});

var nSetCalc = [0,1,2,3,4,5,6,7,8,9,"decimal"];

ReactDOM.render(<div><NumberDisplay /> <OperatorDisplay /> <NumberDisplay0 /> <AnswerDisplay /> <br /><Digitizr nSet={nSetCalc} />
<br /><div id="buttonRow"><ButtonPlus /><ButtonMinus /><ButtonTimes /><ButtonDivide /><ButtonEquals /><ButtonExponent /><ButtonPrime /><ButtonClear /></div><br /><br />
 <CreditsPanel />
 </div>
, document.getElementById('app'));
