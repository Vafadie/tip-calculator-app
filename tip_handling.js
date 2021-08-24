function setPercentage(percentage=getCustomTip()){
    
    var people = getPeople();
    var bill = getBill();
    var customtip = getCustomTip();

    document
    .getElementsByName("number1")[0]
    .innerHTML = "$" + setTipAmount(percentage,bill,customtip).toFixed(2);
    
    document
    .getElementsByName("number1")[1]
    .innerHTML = "$"+ setTotalPerPerson(percentage,people,bill,customtip).toFixed(2);
}


function setTipAmount(percentage,bill,customTip){

    if(isZero(customTip)){
        return (bill*(percentage/100));
    }
    return (bill*(customTip/100));
}

function setTotalPerPerson(percentage,people,bill,customTip){

    if(isZero(customTip)){
        return (bill*(percentage/100))/people;
    }
    return (bill*(customTip/100))/people; 
}

function getCustomTip(){


    var customTip = parseFloat(document.getElementById("customtip").value);
    if(isNaN(customTip)){
        return 0;
    }
    return customTip;
}

function getPeople(){
    var people = parseFloat(document.getElementById("person").value);
    if(isNaN(people)){
        return 1;
    }
    return people;
}

function getBill(){
    
    var bill = parseFloat(document.getElementById("dollar").value);
    if(isZero(bill)){
        return 1;
    }
    return bill;
}

function reset(){

    const reloadButton = document.querySelector("#reload");
    reloadButton.addEventListener("click",function(){
        reload = location.reload();
    }, false);
    
}

function isZero(x){
    if(x===0){
        return true;
    }
    return false;
}