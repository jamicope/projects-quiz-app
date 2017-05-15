//STEP 1 - defining functions and objects


var questionsArray = [
    //Question 1
    {
        questionText: 'What type of wood is this?',
        questionImage: '01.JPEG',
        questionChoices: ['Curly Maple', 'Black Walnut', 'Ponderosa Pine', 'Birch'],
        questionCorrectChoice: 1,
        correctDetails: 'Black Walnut is known for its hardness and dark brown inner coloring with outer light beige outer ring'
    },

    //Question 2
    {
        questionText: 'Which type of fasteners would be best when building a table of Beetle Kill Pine?',
        questionImage: '02.JPEG',
        questionChoices: ['Kreg screws', 'nails', 'mortise &amp tenon', 'hidden tenons'],
        questionCorrectChoice: 3,
        correctDetails: 'Hidden tenons allow for more wood movement as Pine is especially known for continual expansion and contraction.'
    },

    //Question 3
    {
        questionText: 'What causes the blue, purple, and gray coloring in Beetle Kill Pine lumber?',
        questionImage: '03.JPEG',
        questionChoices: ['sap that stayed in tree after it died', 'minerals produced by the tree to kill beetles', 'some trees are just like that', 'blue stain pine fungus that is carried by the Pine Beetle'],
        questionCorrectChoice: 3,
        correctDetails: 'The blue stain pine fungus works symbiotically with the beetles by turning the tree wood into nutrients.'
    },

    //Question 4
    {
        questionText: 'When would you use a Kreg screw?',
        questionImage: '04.JPEG',
        questionChoices: ['to fasten a desktop to a cabinet', 'to fasten wood mechanically to another surface', 'to fasten slabs together for a table', 'for a high-end look'],
        questionCorrectChoice: 1,
        correctDetails: 'Typically Kreg screws are used when mechanically fastening wood to a pre-existing surface, such as installing new cabinetry.'
    },

    //Question 5
    {
        questionText: 'What is a hidden tenon?',
        questionImage: '05.JPEG',
        questionChoices: ['a part of the wood you cannot see', 'an invasive beetle that hides in lumber', 'a joinery method that uses dowels or dominoes inserted into pre-drilled holes', 'a piece of the tree connective tissue'],
        questionCorrectChoice: 2,
        correctDetails: 'It is a joinery method that uses small domino-like wood pieces inserted into holes with wood glue to create strong joints.'
    },

    //Question 6
    {
        questionText: 'Which option best describes a “live edge”?',
        questionImage: '06.JPEG',
        questionChoices: ['tree with bark still attached', 'furniture with the de-barked natural edge', 'the bark of the tree', 'freshly cut trees'],
        questionCorrectChoice: 1,
        correctDetails: 'https://static.wixstatic.com/media/f09628_8c912ce1cd7b40ed8a5ee2a803a778a4~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_441,h_588,al_c,q_90,usm_0.66_1.00_0.01/f09628_8c912ce1cd7b40ed8a5ee2a803a778a4~mv2_d_2448_3264_s_4_2.webp'
    },

    //Question 7
    {
        questionText: 'How could one add a live edge to a planed board?',
        questionImage: '07.JPEG',
        questionChoices: ['Kreg screws', 'wood glue only', 'nailgun', 'hidden tenons with wood glue'],
        questionCorrectChoice: 3,
        correctDetails: 'Hidden tennons with wood glue will give the tightest joint and is most unlikely to fail.'
    },

    //Question 8
    {
        questionText: 'What is the function of a jointer?',
        questionImage: '08.JPEG',
        questionChoices: ['to cut shiplap joints', 'to cut an extremely flat surface', 'to cut dovetails', 'to cut grooves in wood'],
        questionCorrectChoice: 1,
        correctDetails: 'A jointer cuts an extremely flat surface so that joint has gap in the seam.'
    },

    //Question 9
    {
        questionText: 'For a crosscut, which tool would you use?',
        questionImage: '09.JPEG',
        questionChoices: ['chop saw', 'lathe', 'planer', 'band saw'],
        questionCorrectChoice: 0,
        correctDetails: 'A chop saw is the safest choice.'
    },

    //Question 10
    {
        questionText: 'When hand-sanding, why is it best to sand in the direction of the grain?',
        questionImage: '10.JPEG',
        questionChoices: ['to keep your arm from getting tired', 'to avoid sanding marks through the grain', 'to make sanding more efficient', 'to avoind getting splinters'],
        questionCorrectChoice: 1,
        correctDetails: 'Sanding in the direction of the grain will help you avoid the look of sanding marks cutting through wood grain.'
    }
];

var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

//STEP 2-- defining functions
function questionDisplay() {
    //update question text by pulling in info from defined arrays

    $('.quiz-questions h3').text(questionsArray[currentQuestionNumber].questionText);
    $('.quiz-questions div').html("<img src='images/quiz-photos/" + questionsArray[currentQuestionNumber].questionImage + "' class='question-image'>");

    //2 - display choices for the current question
    //2.1 - first delete all the existing choices before populating it with new ones
    $('#choices').empty();

    //2.2 -get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    //2.3 - loop through all the choices and append them to the choices container
    for (var i = 0; i < totalNumberOfChoices; i++) {
        //console.log('my string');
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<li><input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "</li>";
        //2.3.2 append that row to the choices container in html
        $('#choices').append(buildEachChoiceHTML);
    }
    //3 - displays the number of the current question
    $('.question-number').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
    $('.correct-answers').text("Number of correct answers: " + totalNumberOfCorrectAnswers);
}



//STEP 3 - using functions and objects

$(document).ready(function () {
    $('.quiz-questions').hide();
    $('.results').hide();
    $('.start-page').show();

    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.results').hide();
        $('.start-page').hide();
        $('.quiz-questions').show();

        questionDisplay();
    });

    $('.quiz-questions').on('click', '.option', function () {
        var userAnswer = $("input[class='option']:checked").val();
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        console.log("userAnswer = ", userAnswer, "correctAnswer = ", correctAnswer)
        if (userAnswer == correctAnswer) {
            totalNumberOfCorrectAnswers++;
        }

        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            $('.final-score').text(totalNumberOfCorrectAnswers + " out of " + totalNumberOfQuestion);

            $('.start-page').hide();
            $('.quiz-questions').hide();
            $('.results').show();
        } else {
            currentQuestionNumber++;
            questionDisplay();
        }
        console.log(totalNumberOfCorrectAnswers);
    });

});

$('#tryAgainButton').click(function () { //re-start the quiz and show the first question
    $('.results').hide();
    $('.quiz-questions').hide();
    $('.start-page').show();
    currentQuestionNumber = 0;
    totalNumberOfCorrectAnswers = 0;
});
