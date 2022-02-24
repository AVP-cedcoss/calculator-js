
var complete="";
var row="";
var x1 = 0;
x = parseInt(x1);
operator="";
countadd = 0;
countsub = 0;
countmul = 0;
countdiv = 0;
flag = true;

function input(v) {
    if(flag == true) {
        document.getElementById('input').value += document.getElementById('dig'+v).value;
        
    }
    else {
        document.getElementById('input').value = document.getElementById('dig'+v).value;
        flag=true;
    }
    
}

function input1() {
    document.getElementById('input').value += document.getElementById('.').value;
}

function back() {
    var st = document.getElementById('input').value;
    document.getElementById('input').value = st.substr(0, st.length-1);
}

function reset() {
    document.getElementById('input').value = "";
    x=0;
    countadd = 0;
    countsub = 0;
    countmul = 0;
    countdiv = 0;
}

function add() {
    countadd += 1;
    operator = '+';
    var b = document.getElementById('input').value;
    b = parseFloat(b);
    x += b;
    document.getElementById('input').value = x;
    flag = false;
    
    if(x==0) {
        document.getElementById('input').value = "";
    }
    if(countadd>1) {
        operator = "";
    }
}
    

function sub() {
    countsub += 1;
    operator = '-';
    var b = document.getElementById('input').value;
    
    b = parseFloat(b);
    if(x==0) {
        x+=b;
    }
    else {
        x-=b;
    }

    document.getElementById('input').value = x;
    flag = false;

    if(x==0) {
        document.getElementById('input').value = "";  
    }

    if(countsub>1) {
        operator = "";
    }
    
}

function multiply() {
    countmul += 1;
    operator = '*';
    var b = document.getElementById('input').value;
    b = parseFloat(b);
    if(x==0) {
        x+=b;
    }
    else {
        x*=b;
    }

    document.getElementById('input').value = x;
    flag = false;

    if(x==0) {
        document.getElementById('input').value = "";
    }

    if(countmul>1) {
        operator = "";
    }
}

function divide() {
    countdiv += 1;
    operator = '/';
    var b = document.getElementById('input').value;
    
    b = parseFloat(b);
    if(x==0) {
        x+=b;
    }
    else {
        x/=b;
    }

    document.getElementById('input').value = x;
    flag = false;

    if(x==0) {
        document.getElementById('input').value = "";
    }

    if(countdiv>1) {
        operator = "";
    }
    
}

function ansDisplay() {
    if(operator=='+'){
        a = document.getElementById('input').value;
        a= parseFloat(a);
        x += a; 
    }
    
    if(operator=='-'){
        var b = document.getElementById('input').value;
        b = parseFloat(b);
        if(x==0) {
            x+=b;
        }
        else {
            x-=b;
        }
    }

    if(operator=='*') {
        var b = document.getElementById('input').value;
        b = parseFloat(b);
        if(x==0) {
            x+=b;
        }
        else {
            x*=b;
        }
    }
    
    if(operator=='/') {
        var b = document.getElementById('input').value;
        b = parseFloat(b);
        if(x==0) {
            x+=b;
        }
        else {
            x/=b;
        }
    }

    document.getElementById('input').value = x;
    flag = false;
}
    
    