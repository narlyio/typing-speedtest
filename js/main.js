$(document).ready(function() {
    var startTime;
    var prompts = [
        'lorem ipsum sic dolor',
        'The quick brown fox jumped over the lazy dog and I followed in kind',
        'To go into solitude, a man needs to retire as much from his chamber as from society. I am not solitary whilst I read and write, though nobody is with me. But if a man would be alone, let him look at the stars.'
    ];
    var promptIndex;

    $("#difficulty button").click(setDifficulty);
    $("#donebutton").click(finishTest);
    $('form').submit(function(e) {
        e.preventDefault();
        finishTest();
    })
    $('#usertext').keypress(function() {
        finishTest();
    })

    function setDifficulty() {
        promptIndex = $(this).index();
        $('#prompt').val(prompts[promptIndex]);
        startTime = new Date();
    }

    function finishTest() {
        var userText = $("#usertext").val();

        if(prompts[promptIndex] === userText) {
            var output = getTypingSpeedOutput(userText);
            $('#resulttext').html(output);
        }
        else {
            $('#resulttext').html("You've made a typo! =/ Please start over.")
        }
    }

    function getTypingSpeedOutput(userText) {
        endTime = new Date();
        var totalTime = Math.round((endTime - startTime)/1000);
        var words = userText.split(' ');

        var typingspeed = Math.round(words.length/totalTime * 60);

        return ('You typed '+ words.length + ' words in '
                + totalTime + ' seconds, a speed of about '
                + typingspeed +' words per minute!');

    }
});
