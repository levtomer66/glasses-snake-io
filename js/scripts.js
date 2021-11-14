const KOLAM = ["atziz", "koshfir", "somer", "yoash"]
window.onload = function() {
    
    let div = document.getElementById("kolam");
    for (let index = 0; index < KOLAM.length; index++) {
        const element = KOLAM[index];
        let img = document.createElement("img");
        img.onclick = function (e) {
            const audio = new Audio('assets/audio/' + KOLAM[index] + '.mp3');
            audio.play();
        }
        img.src = "assets/images/" + KOLAM[index] + ".jpeg"
        img.classList = ["responsive"]
        div.appendChild(img)
    }
}
