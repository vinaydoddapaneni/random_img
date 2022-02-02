// var ram = Math.ceil(Math.random() * 10)
function changeImg() {
    var ram = Math.ceil(Math.random() * 20)
    document.getElementById("img").src = `https://picsum.photos/200/300?random=${ram}`;
    document.getElementById("para").innerHTML = "Don't Click on Image.";
    document.getElementById("body").style.backgroundColor = "black";
}

function changeContent(){
    document.getElementById("img").src = '#'
    document.getElementById("para").innerHTML = "I told you, don't click on the Image."
}