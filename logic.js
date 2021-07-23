function Calculate()
{
    let p = document.getElementById('amount').value;
    let t = document.getElementById('time').value;
    let r = document.getElementById('rate').value;
    let si = (p*t*r)/100;

    document.getElementById('result').innerHTML=Simple Interest is: " + si; 
}
