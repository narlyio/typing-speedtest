$(document).ready(function() {
    var startTime;

    $("#start-easy").click(easyTest);
    $("#donebutton").click(finishTest);

    function easyTest() {
        $('#prompt').val('lorem ipsum sic dolor');
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
