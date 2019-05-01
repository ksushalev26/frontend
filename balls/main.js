$(function () {

// model

    var canvas$ = $('#canvas');
    var balls = [];
    var intervalId = 0;
    var removedBall = 0;
    var ballId = 0;
    const BALL_SIZE = 100;

    class Ball {
        constructor(ball$, canvas$, id) {
            this.ball$ = ball$;
            this.canvas$ = canvas$;
            this.horizontalDirection = Math.random() > 0.5 ? 'RIGHT' : 'LEFT';
            this.verticalDirection = Math.random() > 0.5 ? 'BOTTOM' : 'TOP';
            this.left = Math.floor(Math.random() * (this.canvas$.width() - BALL_SIZE));
            this.top = Math.floor(Math.random() * (this.canvas$.height() - BALL_SIZE));
            this.id = id;
            this.color = null;
            this.speedX = Math.floor(Math.random() * 3 + 1);
            this.speedY = Math.floor(Math.random() * 3 + 1);
            var cssValues = {
                'top': this.top + 'px',
                'left': this.left + 'px',
                'width': BALL_SIZE + 'px',
                'height': BALL_SIZE + 'px'
            }
            this.ball$.css(cssValues);
        }

        changeDirection() {
            if (this.ball$.position().left >= this.canvas$.width() - BALL_SIZE) {
                this.horizontalDirection = 'LEFT';
            } else if (this.ball$.position().left <= 0) {
                this.horizontalDirection = 'RIGHT';
            }

            if (this.ball$.position().top >= this.canvas$.height() - BALL_SIZE) {
                this.verticalDirection = 'TOP';
            } else if (this.ball$.position().top <= 0) {
                this.verticalDirection = 'BOTTOM';
            }
        }

        toggleDirection() {
            this.horizontalDirection === 'LEFT' ?
                this.horizontalDirection = 'RIGHT' :
                this.horizontalDirection = 'LEFT';

            this.verticalDirection === 'TOP' ?
                this.verticalDirection = 'BOTTOM' :
                this.verticalDirection = 'TOP';
        }

        currentColor() {
            this.ball$.css('backgroundColor', this.color);
        }

        move() {
            this.currentColor();
            this.changeDirection();
            if (this.horizontalDirection === 'RIGHT') {
                this.ball$.css('left', (this.left += this.speedX) + 'px');
            } else {
                this.ball$.css('left', (this.left -= this.speedX) + 'px');
            }

            if (this.verticalDirection === 'BOTTOM') {
                this.ball$.css('top', (this.top += this.speedY) + 'px');
            } else {
                this.ball$.css('top', (this.top -= this.speedY) + 'px');
            }
        }

        removeBall() {
            this.ball$.remove();
        }

    }

    // model


    //  Controll

    $('#addBall').click(function () {
        addBall(1);
    });

    $('#stop').click(function () {
        clearInterval(intervalId);
        intervalId = null;
    });

    $('#start').click(function () {
        startTime = Date.now();
        if (!intervalId) {
            intervalId = setInterval(function () {
                balls.forEach(function (ball, index) {
                    ball.move();
                    for (var i = 0; i < balls.length; i++) {

                        if (i !== index) {
                            var distanse = calcDistanse(ball.left, ball.top, balls[i].left, balls[i].top);

                            if (distanse < 101) {
                                ball.toggleDirection();
                                break;
                            }
                        }
                    }
                });
            }, 32);
        }
    });

    $('#game').click(function () {
        addBall(15);
    });

    //  Controll


    //  Service

    function addBall(q) {

        var colorClass = Math.random() < 0.5 ? 'green' : 'red';
        var ball = $(`<div class="ball ${colorClass}"></div>`);
        var newBall = new Ball(ball, canvas$, ballId);

        if (checkDistanse(newBall.left, newBall.top)) {
            canvas$.append(ball);
            ballId++;
            newBall.color = colorClass;
            balls.push(newBall);
            q--;

            ball.click(function () {
                if (newBall.color === 'green') {
                    newBall.removeBall();

                    removeBallFromArray(newBall.id);
                    removedBall++;

                    if (!checkGreenColor()) {
                        changeColor();
                    }
                    checkBallsLength();
                } else if (newBall.color === 'red') {
                    addBall(2);
                }
            });
        }

        if (q <= 0) {
            return;
        }
        addBall(q);
    }

    function removeBallFromArray(id) {
        for (var i = 0; i < balls.length; i++) {
            if (balls[i].id === id) {
                balls.splice(i, 1);
            }
        }
    }

    function checkGreenColor() {
        for (var i = 0; i < balls.length; i++) {
            if (balls[i].color === 'green') {
                return true;
            }
        }
        return false;
    }

    function changeColor() {
        balls.forEach(function (ball) {
            ball.color = 'green';
        });
    }

    function checkBallsLength() {
        if (balls.length === 0) {
            endTime = Date.now();
            alert(`You removed ${removedBall} balls. You spent ${getMinutes(endTime - startTime)} on it.`);
            reset();
        }
    }

    function getMinutes(millisec) {
        var minutes = Math.floor(millisec / 60000);
        var seconds = ((millisec % 60000) / 1000).toFixed(0);
        return minutes + ':' + seconds;
    }

    function calcDistanse(left1, top1, left2, top2) {
        var x1 = left1 + BALL_SIZE;
        var x2 = left2 + BALL_SIZE;
        var y1 = top1 + BALL_SIZE;
        var y2 = top2 + BALL_SIZE;
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
    }

    function checkDistanse(left, top) {
        var x1 = left + 50;
        var y1 = top + 50;
        var x2 = null;
        var y2 = null;
        for (var i = 0; i < balls.length; i++) {
            x2 = balls[i].left + BALL_SIZE;
            y2 = balls[i].top + BALL_SIZE;
            var carrentDistanse = calcDistanse(x1, y1, x2, y2);
            if (carrentDistanse < BALL_SIZE) {
                return false;
            }
        }
        return true;
    }

    function reset() {
        startTime = Date.now();
        endTime = 0;
        ballId = 0;
        removedBall = 0;
    }

    //  Service
});