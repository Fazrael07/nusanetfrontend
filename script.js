
function tambah(){
    var angka1=parseFloat(document.calculator.angka1.value);
    var angka2=parseFloat(document.calculator.angka2.value);
    var angka3=parseFloat(document.calculator.angka3.value);
        if (!document.getElementById("chk1").checked && (!document.getElementById("chk2").checked) && (!document.getElementById("chk3").checked)) {
            var hasil= "ERROR"
        } 
        else {
            var hasil= "ERROR"
        }
        if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked)) {
            var hasil= angka1+angka2;
        }
        if (document.getElementById("chk1").checked && (document.getElementById("chk3").checked)) {
            var hasil= angka1+angka3;
        }
        if (document.getElementById("chk2").checked && (document.getElementById("chk3").checked)) {
            var hasil= angka2+angka3;
        }
        if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked) && (document.getElementById("chk3").checked)) {
            var hasil= angka1+angka2+angka3;
        }  
    document.calculator.hasil.value=hasil;
   }

   function kurang(){
    var angka1=parseFloat(document.calculator.angka1.value);
    var angka2=parseFloat(document.calculator.angka2.value);
    var angka3=parseFloat(document.calculator.angka3.value);
    if (!document.getElementById("chk1").checked && (!document.getElementById("chk2").checked) && (!document.getElementById("chk3").checked)) {
        var hasil= "ERROR"
    } 
    else {
        var hasil= "ERROR"
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked)) {
        var hasil= angka1-angka2;
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk3").checked)) {
        var hasil= angka1-angka3;
    }
    if (document.getElementById("chk2").checked && (document.getElementById("chk3").checked)) {
        var hasil= angka2-angka3;
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked) && (document.getElementById("chk3").checked)) {
        var hasil= angka1-angka2-angka3;
    }
    document.calculator.hasil.value=hasil;
   }

   function kali(){
    var angka1=parseFloat(document.calculator.angka1.value);
    var angka2=parseFloat(document.calculator.angka2.value);
    var angka3=parseFloat(document.calculator.angka3.value);
    if (!document.getElementById("chk1").checked && (!document.getElementById("chk2").checked) && (!document.getElementById("chk3").checked)) {
        var hasil= "ERROR"
    } 
    else {
        var hasil= "ERROR"
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked)) {
        var hasil= angka1*angka2;
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk3").checked)) {
        var hasil= angka1*angka3;
    }
    if (document.getElementById("chk2").checked && (document.getElementById("chk3").checked)) {
        var hasil= angka2*angka3;
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked) && (document.getElementById("chk3").checked)) {
        var hasil= angka1*angka2*angka3;
    }
    document.calculator.hasil.value=hasil;
   }

   function bagi(){
    var angka1=parseFloat(document.calculator.angka1.value);
    var angka2=parseFloat(document.calculator.angka2.value);
    var angka3=parseFloat(document.calculator.angka3.value);
    if (!document.getElementById("chk1").checked && (!document.getElementById("chk2").checked) && (!document.getElementById("chk3").checked)) {
        var hasil= "ERROR"
    } 
    else {
        var hasil= "ERROR"
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked)) {
        var hasil= angka1/angka2;
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk3").checked)) {
        var hasil= angka1/angka3;
    }
    if (document.getElementById("chk2").checked && (document.getElementById("chk3").checked)) {
        var hasil= angka2/angka3;
    }
    if (document.getElementById("chk1").checked && (document.getElementById("chk2").checked) && (document.getElementById("chk3").checked)) {
        var hasil= angka1/angka2/angka3;
    }
    document.calculator.hasil.value=hasil;
   }