function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;

    if (weight == NaN || weight == 0) {
        alert("Please input weight!");
    }
    else if (height == NaN || height == 0) {
        alert("Please input height!");
    }
    else if (age == NaN || age == 0) {
        alert("Please input age!");
    }
    else {
        var bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById("result").style.display = "block";
        document.getElementById("simpleConclusion").innerHTML = "Berat Badan " + bmiResult(bmi)[0];
        document.getElementById("calcResult").innerHTML = bmi;
        document.getElementById("extendedConclusion").innerHTML = "Anda memiliki " + bmiResult(bmi)[1];
    }
}

function reset() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
}

function bmiResult(bmi) {
    var desc1, desc2;

    if (bmi < 18.5){
        desc1 = "Kurang";
        desc2 = "berat badan kurang";
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        desc1 = "Ideal";
        desc2 = "berat badan ideal";
    }
    else if (bmi > 25.0 && bmi < 29.9) {
        desc1 = "Lebih";
        desc2 = "berat badan lebih";
    }
    else {
        desc1 = "Gemuk";
        desc2 = "berat badan kegemukan (obesitas)";
    }

    return [desc1, desc2];
}

