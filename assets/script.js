var par = 0;

function calculatorInputs(val){
    document.getElementById("display").innerHTML+=val;
    if(val.includes('(') == true){
        par = 1;
    }
}
var NumOfSqrt = 0;
var NumOfPow = 0;
var NUmOfSin = 0;
function Calc(){
    var calc = document.getElementById("display").innerHTML;
    if(calc.includes('√') == true){
        array = calc.split("");
        for(x=0;x<calc.length;x++){
            if(array[x]==='√'){
                NumOfSqrt++;
            }
        }
        if(NumOfSqrt==0){
            var firstPar = calc.indexOf('(');
            var lastPar = calc.indexOf(')');
            var sqrt = Math.sqrt(calc.slice(firstPar+1, lastPar)).toPrecision(9);
            var newCalc = calc.replace('√'+calc.slice(firstPar, lastPar+1), sqrt);
            calc = newCalc;
        }else{
            for(x=0;x<NumOfSqrt;x++){
                var firstPar = calc.indexOf('(');
                var lastPar = calc.indexOf(')');
                var sqrt = Math.sqrt(calc.slice(firstPar+1, lastPar)).toPrecision(9);
                var newCalc = calc.replace('√'+calc.slice(firstPar, lastPar+1), sqrt);
                calc = newCalc;
            }
        }
        document.getElementById("display").innerHTML = eval(calc);
        par = 1;
    }
    if(calc.includes('^') == true){
        array = calc.split("");
        for(x=0;x<calc.length;x++){
            if(array[x]==='^'){
                NumOfPow++;
            }
        }
            for(x=0;x<NumOfPow;x++){
                var pow = calc.slice(calc.indexOf('(')+1, calc.indexOf(')'));
                var n = calc.slice(calc.indexOf('^')-1, calc.indexOf('^'));
                var firstPar = calc.indexOf('(');
                var lastPar = calc.indexOf(')');
                var result = Math.pow(n, pow);
                console.log(result);
                var newCalc = calc.replace(calc.slice(firstPar-2, lastPar+1), result);
                calc = newCalc;
            }
            NumOfPow=0;
        
        document.getElementById("display").innerHTML = eval(calc);
        par=1;
    }

    if(calc.includes('^') == true || calc.includes('√') == true){
        array = calc.split("");
        for(x=0;x<calc.length;x++){
            if(array[x]==='√'){
                NumOfSqrt++;
            }
        }
        for(x=0;x<NumOfSqrt;x++){
            var firstPar = calc.indexOf('(');
            var lastPar = calc.indexOf(')');
            var sqrt = Math.sqrt(calc.slice(firstPar+1, lastPar)).toPrecision(9);
            var newCalc = calc.replace('√'+calc.slice(firstPar, lastPar+1), sqrt);
            calc = newCalc;
        }

        for(x=0;x<calc.length;x++){
            if(array[x]==='^'){
                NumOfPow++;
            }
        }
        for(x=0;x<NumOfPow;x++){
        var pow = calc.slice(calc.indexOf('(')+1, calc.indexOf(')'));
        var n = calc.slice(calc.indexOf('^')-1, calc.indexOf('^'));
        var firstPar = calc.indexOf('(');
        var lastPar = calc.indexOf(')');
        var result = Math.pow(n, pow);
        var newCalc = calc.replace(calc.slice(firstPar-2, lastPar+1), result);
        calc = newCalc;
        }
        
        document.getElementById("display").innerHTML = eval(calc);
    }

    if(calc.includes('sin')==true){
            var firstPar = calc.indexOf('(');
            var lastPar = calc.indexOf(')');
            var sin = Math.sin(calc.slice(firstPar+1, lastPar)*(Math.PI/180)).toPrecision(6);
            var newCalc = calc.replace('sin'+calc.slice(firstPar, lastPar+1), sin);
            calc = newCalc;
        document.getElementById("display").innerHTML = eval(calc);
    }

    if (calc.includes('cos')==true){
        var firstPar = calc.indexOf('(');
        var lastPar = calc.indexOf(')');
        var cos = Math.cos(calc.slice(firstPar+1, lastPar)*(Math.PI/180)).toPrecision(6);
        var newCalc = calc.replace('cos'+calc.slice(firstPar, lastPar+1), cos);
        calc = newCalc;
        document.getElementById("display").innerHTML = eval(calc);
    }

    if(calc.includes('tg')==true){
        var firstPar = calc.indexOf('(');
        var lastPar = calc.indexOf(')');
        var tg = Math.tan(calc.slice(firstPar+1, lastPar)*(Math.PI/180)).toPrecision(6);
        var newCalc = calc.replace('tg'+calc.slice(firstPar, lastPar+1), tg);
        calc = newCalc;
        document.getElementById("display").innerHTML = eval(calc);
    }

    if(calc.includes('+')||calc.includes('-')||calc.includes('*')||calc.includes('/')){
        document.getElementById("display").innerHTML= eval(calc);
    }
}

function deleteDisplay(){
    var input = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = input.slice(0, input.length-1);
}

function clearDisplay(){
    document.getElementById("display").innerHTML = "";
    par = 0;
}

var count = 0;
function expandCalc(){
    document.getElementById("extended").style.display = "flex";
    document.getElementById("calc").style.borderTopRightRadius = "0px";
    document.getElementById("calc").style.borderBottomRightRadius = "0px";
    document.getElementById("display").style.width = "62rem";
    document.getElementById("extended").style.left="100px";
    count++;
    if(count == 2) {
        document.getElementById("extended").style.display = "none";
        count = 0;
        document.getElementById("calc").style.borderTopRightRadius = "20px";
        document.getElementById("calc").style.borderBottomRightRadius = "20px";
        document.getElementById("display").style.width = "30rem";
    }
}

function parenthesis(){
    console.log(par);
    if(par == 0){
        document.getElementById("display").innerHTML += "(";
        par=1;
    }else if(par==1){
        document.getElementById("display").innerHTML += ")";
        par = 0;
    }
}