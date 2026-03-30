const field = document.querySelector('.football__field');
const ball = document.querySelector('.football__ball');

const ballMove = (clientX, clientY) => {
    ball.style.left = `${clientX}px`
    ball.style.top = `${clientY}px`
}

field.addEventListener('click', (event) => {
    const rect = field.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    ballMove(x, y)
})