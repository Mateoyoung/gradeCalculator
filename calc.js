function convert(string){
    var array = string.split(",");
    for(var i = 0; i < array.length; i++){
        array[i] = parseInt(array[i]);
    }
    return array;
}

function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / (arr.length);
}

function currentGrade(){

    var HomeWorkGrades = document.getElementById('HomeWorkGrades').value;
    var HomeWorkWeight = document.getElementById('HomeWorkWeight').value;
    var QuizGrades = document.getElementById('QuizGrades').value;
    var QuizWeight = document.getElementById('QuizWeight').value;
    var TestGrades = document.getElementById('TestGrades').value;
    var TestWeight = document.getElementById('TestWeight').value;

    var arrOfQuiz = convert(QuizGrades);
    var arrOfHW = convert(HomeWorkGrades);
    var arrOfTest = convert(TestGrades);

    var HomeWorkGradesAVG = average(arrOfQuiz);
    var QuizGradesAVG = average(arrOfHW);
    var TestGradesAVG = average(arrOfTest);

    var a = (HomeWorkGradesAVG * HomeWorkWeight) / 100;
    var b = (QuizGradesAVG * QuizWeight) / 100;
    var c = (TestGradesAVG * TestWeight) / 100;
    var myGrade = Math.floor(a + b + c);



    document.getElementById('myGrade').innerHTML = "You currently have a " + myGrade + "% LOL";
    return (myGrade);
}



function newButton(){
    var grade = currentGrade();
    var HomeWorkGrades = document.getElementById('HomeWorkGrades').value;
    var HomeWorkWeight = document.getElementById('HomeWorkWeight').value;
    var QuizGrades = document.getElementById('QuizGrades').value;
    var QuizWeight = document.getElementById('QuizWeight').value;
    var TestGrades = document.getElementById('TestGrades').value;
    var TestWeight = document.getElementById('TestWeight').value;
    var finalWeightGoal = document.getElementById('desiredGrade').value;
    var weightOfFinal = document.getElementById('weightOfFinal').value;


    var arrOfQuiz = convert(QuizGrades);
    var arrOfHW = convert(HomeWorkGrades);
    var arrOfTest = convert(TestGrades);

    var HomeWorkGradesAVG = average(arrOfQuiz);
    var QuizGradesAVG = average(arrOfHW);
    var TestGradesAVG = average(arrOfTest);

    var a = (HomeWorkGradesAVG * HomeWorkWeight) / 100;
    var b = (QuizGradesAVG * QuizWeight) / 100;
    var c = (TestGradesAVG * TestWeight) / 100;
    var gradeNeeded = Math.floor((finalWeightGoal - a - b - c) * 100) / weightOfFinal;

    // solve for X  so a + b + c + {(x * weightOfFinal) / 100} = final weight goal
    // let x = the grade you need in order to achieve said desired grade
    //   x = {(Desired grade - a -  b - c) 100} / Weight of final

    document.getElementById('myGrade').innerHTML = "You need to score a " + gradeNeeded + "% on your final" + grade + " in order to achieve your goal of " + finalWeightGoal + "%  ";




}