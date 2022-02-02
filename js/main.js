// var ram = Math.ceil(Math.random() * 10)
function changeImg() {
    var ram = Math.ceil(Math.random() * 20)
    document.getElementById("img").src = `https://picsum.photos/200/300?random=${ram}`;
    document.getElementById("body").style.backgroundColor = "black";
}