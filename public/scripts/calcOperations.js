//  djmblog.com calculator app calcOperations.js 
//  copyright 2016-2017
//  http://danmckeown.info/calculator

$(document).ready(function() {
        var str = "0";
        
        var $CalcOperator = "addDigit";
        var $NumberCache = 0;
        var $NumberCache0 = 0;
        var mutatingMode = "$NumberCache";
        var $Answer = 0;

        $( "span#numberReadoutId" ).html( $NumberCache );
        $( "span#numberReadout0Id" ).html( $NumberCache0 );
        $( "span#answerReadoutId" ).html( $Answer );

        $("span#numberReadoutId").click(function() {
          mutatingMode = "$NumberCache";
          console.log("mutating mode set to $NumberCache");
        });
        $("span#numberReadout0Id").click(function() {
          mutatingMode = "$Number0Cache";
          console.log("mutating mode set to $Number0Cache");
        });
        $("span#operatorReadoutId").click(function() {
          mutatingMode = "$CalcOperator";
          console.log("mutating mode set to $CalcOperator");
        });

         $("span#1").click(function() {
             console.log("1 pressed");
             if (mutatingMode === "$NumberCache")
             {
                 let currentDigits = $( "span#numberReadoutId" ).html();
                 $( "span#numberReadoutId" ).html( currentDigits + "1" );
                 console.log("number readout (1) set to 1");
             }
             if (mutatingMode === "$Number0Cache")
              {
                  let currentDigits = $( "span#numberReadout0Id" ).html();
                 $( "span#numberReadout0Id" ).html( currentDigits + "1" );
                 console.log("number readout (0) set to 1");
             }
        });
        $("span#2").click(function() {
             console.log("2 pressed");
             if (mutatingMode === "$NumberCache")
             {
                 let currentDigits = $( "span#numberReadoutId" ).html();
                 $( "span#numberReadoutId" ).html( currentDigits + "2" );
                 console.log("number readout (1) set to 2");
             }
             if (mutatingMode === "$Number0Cache")
              {
                  let currentDigits = $( "span#numberReadout0Id" ).html();
                 $( "span#numberReadout0Id" ).html(  currentDigits + "2" );
                 console.log("number readout (0) set to 2");
             }
        });
        $("span#3").click(function() {
            console.log("3 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html( currentDigits + "3" );
                console.log("number readout (1) set to 3");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits +  "3" );
                console.log("number readout (0) set to 3");
            }
        });
        $("span#4").click(function() {
            console.log("4 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "4" );
                console.log("number readout (1) set to 4");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "4" );
                console.log("number readout (0) set to 4");
            }
        });
        $("span#5").click(function() {
            console.log("5 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "5" );
                console.log("number readout (1) set to 5");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "5" );
                console.log("number readout (0) set to 5");
            }
        });
        $("span#6").click(function() {
            console.log("6 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "6" );
                console.log("number readout (1) set to 6");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "6" );
                console.log("number readout (0) set to 6");
            }
        });
        $("span#7").click(function() {
            console.log("7 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "7" );
                console.log("number readout (1) set to 7");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "7" );
                console.log("number readout (0) set to 7");
            }
        });
        $("span#8").click(function() {
            console.log("8 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "8" );
                console.log("number readout (1) set to 8");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "8" );
                console.log("number readout (0) set to 8");
            }
        });
        $("span#9").click(function() {
            console.log("9 pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "9" );
                console.log("number readout (1) set to 9");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "9" );
                console.log("number readout (0) set to 9");
            }
        });
        $("span#decimal").click(function() {
            console.log(". pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html(currentDigits + "." );
                console.log("number readout (1) set to .");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html(currentDigits + "." );
                console.log("number readout (0) set to .");
            }
        });
        $("span#plus").click(function() {
            console.log("plus (+) pressed");
            if (mutatingMode === "$CalcOperator")   // this check may be unnecessary
            {
                let currentOp = $( "span#operatorReadoutId" ).html();
                $( "span#operatorReadoutId" ).html("+");
                console.log("operator set to +");
            }
        });
        $("span#minus").click(function() {
            console.log("minus (-) pressed");
            if (mutatingMode === "$CalcOperator")   // this check may be unnecessary
            {
                let currentOp = $( "span#operatorReadoutId" ).html();
                $( "span#operatorReadoutId" ).html("-");
                console.log("operator set to -");
            }
        });
        $("span#times").click(function() {
            console.log("times/multiplication (*) pressed");
            if (mutatingMode === "$CalcOperator")   // this check may be unnecessary
            {
                let currentOp = $( "span#operatorReadoutId" ).html();
                $( "span#operatorReadoutId" ).html("*");
                console.log("operator set to *");
            }
        });
        $("span#divide").click(function() {
            console.log("division (/) pressed");
            if (mutatingMode === "$CalcOperator")   // this check may be unnecessary
            {
                let currentOp = $( "span#operatorReadoutId" ).html();
                $( "span#operatorReadoutId" ).html("/");
                console.log("operator set to /");
            }
        });
        $("span#exponent").click(function() {
            console.log("exponent (^) pressed");
            if (mutatingMode === "$CalcOperator")   // this check may be unnecessary
            {
                let currentOp = $( "span#operatorReadoutId" ).html();
                $( "span#operatorReadoutId" ).html("^");
                console.log("operator set to ^");
            }
        });
        $("span#Clear").click(function() {
            console.log("Clear button pressed");
            if (mutatingMode === "$NumberCache")
            {
                let currentDigits = $( "span#numberReadoutId" ).html();
                $( "span#numberReadoutId" ).html( "0" );
                console.log("number readout (1) set to 0");
            }
            if (mutatingMode === "$Number0Cache")
            {
                let currentDigits = $( "span#numberReadout0Id" ).html();
                $( "span#numberReadout0Id" ).html( "0" );
                console.log("number readout (0) set to 0");
            }
        });
        $("span#0").click(function() {
             console.log("0 pressed");
             if (mutatingMode === "$NumberCache")
             {
                 let currentDigits = $( "span#numberReadoutId" ).html();
                 $( "span#numberReadoutId" ).html( currentDigits + "0" );
                 console.log("number readout (1) set to 0");
             }
             if (mutatingMode === "$Number0Cache")
              {
                  let currentDigits = $( "span#numberReadout0Id" ).html();
                 $( "span#numberReadout0Id" ).html( currentDigits + "0" );
                 console.log("number readout (0) set to 0");
             }
        });
        $("span#equals").click(function() {
            console.log("equal (=) pressed");
            let currentDigits = $( "span#numberReadoutId" ).html();
            let currentDigitsNumber = Number(currentDigits);
            let currentDigits0 = $( "span#numberReadout0Id" ).html();
            let currentDigits0Number = Number(currentDigits0);
            let currentOp = $( "span#operatorReadoutId" ).html();
            let Cstring = currentDigitsNumber + " " + currentOp + " " + currentDigits0Number;
            console.log("operation: " + currentDigitsNumber + " " + currentOp + " " + currentDigits0Number);
            let callback1 = Cstring;
            if (currentOp === "+")
            {
                var outPutNumber = AddN(currentDigitsNumber,currentDigits0Number);
                console.log("output number [via Addn]: " + outPutNumber);
                $( "span#answerReadoutId" ).html( outPutNumber );
            }
            else if (currentOp === "-")
            {
                var outPutNumber = SubtractTwo(currentDigitsNumber,currentDigits0Number);
                console.log("output number [via SubtractTwo]: " + outPutNumber);
                $( "span#answerReadoutId" ).html( outPutNumber );
            }
            else if (currentOp === "*")
            {
                var outPutNumber = MultiplyN(currentDigitsNumber,currentDigits0Number);
                console.log("output number [via MultiplyN]: " + outPutNumber);
                $( "span#answerReadoutId" ).html( outPutNumber );
            }
            else if (currentOp === "^")
            {
                var outPutNumber = PowerTwo(currentDigits, currentDigits0);
                console.log("output number: " + outPutNumber);
                $( "span#answerReadoutId" ).html( outPutNumber );
            }
            else if (currentOp === "/")
            {
                var outPutNumber = DivideTwo(currentDigitsNumber,currentDigits0Number);
                console.log("output number [via DivideTwo]: " + outPutNumber);
                $( "span#answerReadoutId" ).html( outPutNumber );
            }
            else if ((currentOp !== "^") && (currentOp !== "/") && (currentOp !== "+") && (currentOp !== "-") && (currentOp !== "*"))
            {
                var outPutNumber = ( new Function( 'return ' + callback1 ) )();
                console.log("output number [via new Function]: " + outPutNumber);
                $( "span#answerReadoutId" ).html( outPutNumber );
            }
        });
        $("span#Prime").click(function() {
            console.log("Prime pressed");
            let currentAnswer = $( "span#answerReadoutId" ).html();
            let currentDigitsNumber = Number(currentAnswer);
            let primeCheckResult = isThisPrime(currentDigitsNumber);
            let primeAnswer = currentDigitsNumber + " is Prime?: " + primeCheckResult;
            console.log("primeCheckResult: " + currentDigitsNumber + " is Prime?: " + primeCheckResult);
            $( "span#answerReadoutId" ).html( primeAnswer );
        });
});
