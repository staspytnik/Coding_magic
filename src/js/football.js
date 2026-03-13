const field = document.querySelector('.football_field');
const ball = document.querySelector('.football_ball');


field.addEventListener('click', (event) => {
    const clientX = event.clientX
    const clientY = event.clientY

    console.log(clientX, clientY);

    function ballMove(clientX, clientY) {
        ball.style.right = clientX
        ball.style.left = clientX
        ball.style.top = clientY
        ball.style.bottom = clientY
        ball.style.transition = 1;
        return
    }

    console.log(ballMove(clientX, clientY));
})