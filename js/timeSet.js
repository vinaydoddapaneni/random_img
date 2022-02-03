var counter = 0;
var value = 1;
setInterval(() => {
    if (counter < 10) {
        document.getElementById("img").src = `https://picsum.photos/200/300?random=${counter}`
        counter += value
        var button = document.getElementsByTagName('button')[0]
        button.setAttribute('class', `button button${counter}`);
    } else {
        window.clearInterval()
    }
}, 1000);
function changeImg() {
    counter = 0
    document.getElementById('button').innerHTML = "loading..."
    setInterval(() => {
        document.getElementById('button').innerHTML = "Refresh"
        window.clearInterval();
    },1000)

}