var counter = 0;
var value = 1;
setInterval(() => {
    if (counter < 10) {
        document.getElementById("img").src = `https://picsum.photos/200/300?random=${counter}`
        counter += value
        // document.getElementsByTagName('button')[0].setAttribute("button",`.button${counter}`)
        var button = document.getElementsByTagName('button')[0]
        console.log(button.setAttribute('class',`button button${counter}`));
    } else {
        document.clearInterval()
    }
}, 1000);
function changeImg() {
    counter = 0
}