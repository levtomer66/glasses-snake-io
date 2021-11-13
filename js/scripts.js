function play(moronName) {
    let audio = ''
    switch (moronName) {
        case 'kushfitz':
            audio = new Audio('assets/audio/koshfir-kulam.mp3');
            break;
        case 'atziz':
            audio = new Audio('assets/audio/atziz-kulam.mp3');
            break;
        case 'somer':
            audio = new Audio('assets/audio/somer-rigushim.mp4');
            break;
        case 'yoash':
            audio = new Audio('assets/audio/yoash-driving.mp3');
            break;
    }
    audio.play();
}