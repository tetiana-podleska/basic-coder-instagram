/** function to get voices **/

const textarea = document.querySelector('textarea');
const voiceList = document.querySelector('select');
const speechBtn = document.querySelector('button');

let synth = speechSynthesis,
    isSpeaking = true
    voices();

function voices() {
    for(let voice of synth.getVoices()) {
        let selected = voice.name === 'Google US English' ? 'selected' : '';
        //console.log(voice);
        //passing voice and voice language
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend', option)
        //inserting option tag
    }
}

synth.addEventListener('voiceschanged', voices);

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()) {
        //if the available voice matches with user selected voice than it set that voice
        if (voice.name === voiceList.value) {
            utterance.voice === voice
        }
    }
    speechSynthesis.speak(utterance)
    //speak the text
}


/** play and pause of speech **/

speechBtn.addEventListener('click', e => {
    e.preventDefault();
    if(textarea.value !== '') {
        if(!synth.speaking) {
            //if speech is not active it will activate
            textToSpeech(textarea.value)
        }
        if(textarea.value.length > 80) {
            if(isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech"
            } else {
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech"
            }

            setInterval(() => {
                if(!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    speechBtn.innerText = "Convert to Speech"
                }
            })
        }
    }
})