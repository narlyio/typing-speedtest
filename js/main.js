$(document).ready(function() {
    var startTime;
    var prompts = [
        'lorem ipsum sic dolor',
        'The quick brown fox jumped over the lazy dog and I followed in kind',
        'To go into solitude, a man needs to retire as much from his chamber as from society. I am not solitary whilst I read and write, though nobody is with me. But if a man would be alone, let him look at the stars.'
    ];

    $("#difficulty button").click(easyTest);
    $("#donebutton").click(finishTest);

    function easyTest() {
        $('#prompt').val(prompts[0]);
        startTime = new Date();
    }

    function finishTest() {
        endTime = new Date();
        var userText = $("#usertext").val();
        var totalTime = Math.round((endTime - startTime)/1000);
        var words = userText.split(' ');

        var typingspeed = Math.round(words.length/totalTime * 60);

        $('#resulttext').html(
            'You typed '+ words.length + ' words in '
            + totalTime + ' seconds, a speed of about '
            + typingspeed +' words per minute!'
        );
    }
});
