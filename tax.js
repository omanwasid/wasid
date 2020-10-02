
function calculate()
{
    
    var amount= parseFloat(document.getElementById("money").value);
    var taxPercentage=parseFloat(document.getElementById("tax").value);
    var taxAmount=(taxPercentage/100)*amount;
    var finalAmount=amount-taxAmount;
    document.getElementById("result").innerHTML = finalAmount;
}


