var counter = document.getElementById("counter");

function increment() {
    var count = +counter.innerHTML;
    count += 1;
    counter.innerHTML = count;
    if (count > 0) {
        counter.style.color = "blue";
    }
}

function decrement() {
    var count = +counter.innerHTML;
    if (count > 0) {
        count -= 1;
        counter.innerHTML = count;
        if (count === 0) {
            counter.style.color = "black";
        }
    }
}