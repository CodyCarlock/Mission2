//using jquery, this calls the calc button and when the user clicks, it preforms the following function.
$("#calc").click(function () {
    
    //Gets each input and assigns it to a variable
    var iAssignment = $('#asmnt').val() * .55;
    var iGP = $('#gp').val() * .05;
    var iQuiz = $('#qz').val() * .1;
    var iExam = $('#ex').val() * .2;
    var iIntex = $('#itx').val() * .1;

    //calculates the final grade by adding all the inputs and multiplying by 100 to turn to a whole number
    var iFG = (iAssignment + iGP + iQuiz + iExam + iIntex) * 100;
    var sLG;

    //to check if they entered correct inputs
    if (iFG > 150){ 
        alert("only input decimals numbers ex: 0.95");

    } else {

        //Assigns the final grade to a letter value 
        if (iFG > 94) {
            sLG = 'A';
        } else if (iFG > 90) {
            sLG = "A-";
        } else if (iFG > 87) {
            sLG = 'B+';
        } else if (iFG > 84) {
            sLG = "B";
        } else if (iFG > 80) {
            sLG = 'B-';
        } else if (iFG > 77) {
            sLG = 'C+';
        } else if (iFG > 74) {
            sLG = 'C';
        } else if (iFG > 70) {
            sLG = 'C-';
        } else if (iFG > 67) {
            sLG = 'D+';
        } else if (iFG > 64) {
            sLG = 'D';
        } else if (iFG > 60) {
            sLG = 'D-';
        } else {
            sLG = "E";
        }

        //alerts the user their numeric grade percent and letter grade
        alert(iFG + '% which is a(n) ' + sLG);
    }

})

