window.onload = () => {

let target = document.querySelector(`.typing`);

function randomString() {
    let arr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript', 'Learn to Python', 'Learn to Ruby'];
    let selected = arr[Math.floor(Math.random() * arr.length)];
    let letter = selected.split('');

    return letter;
}

function resetTyping() {
    target.textContent = '';
    type(randomString());
}

function type(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => {
            type(randomArr);
        }, 80);
    }
    else {
        setTimeout(resetTyping, 3000)
    }
}

type(randomString())

function blink() {
    target.classList.toggle('active');
}

setInterval(blink, 500);
}