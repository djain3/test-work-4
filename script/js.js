$(document).ready(function () {
    /*cells*/
    for (i = 1; i <= 16; i++) {
        $('#main').append('<div id="cell-' + i + '" class="cell vertical"><p>' + i + '</p></div>');
        document.getElementById('cell-' + i).addEventListener("transitionend", AnimationListener, false);
    }
    /*flip*/
    var rotate = document.getElementsByClassName('cell');

    function flip(i) {
        if (i < rotate.length - 1) {
            setTimeout(function () {
                flip(i + 1);
            }, 200);
        }
        rotate[i].classList.toggle('flip');
        LogEvent('animation start cell-' + (i + 1))
    }

//
    var anim = document.getElementById("start");
    log = document.getElementById("log");

//
    function AnimationListener(e) {
        if (e.propertyName == 'transform') {
            LogEvent('animation end ' + e.srcElement.id);
            if (e.srcElement.id == 'cell-' + rotate.length) {
                ButtonStart('START');
                LogEvent('animation end');
                alert("Ячейки успешно перевернуты!")

            }
        }
    }

    // console log and button
    function ButtonStart(msg) {
        anim.textContent = msg
    }

    function LogEvent(msg) {
        log.textContent += "\n" + msg;
    }

    $("#start").click(function () {
        LogEvent('animation start');
        ButtonStart('In progress')
        flip(0);
    });
});




