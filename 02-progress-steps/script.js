const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {

    if (currentActive > circles.length) {
        currentActive = circles.length;
    } else {
        currentActive++;
    }

    update();
});

prev.addEventListener('click', () => {
    if (currentActive <= 1) {
        currentActive = 1;
    } else {
        currentActive--;
    }

    update()
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        }
    });

    const active = document.querySelectorAll('.active');

    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%';


    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}