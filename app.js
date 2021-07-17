const micBtn = document.querySelector('.mic-icon');
const guessDisplay = document.querySelector('.numberGuessed');
const hintDisplay = document.querySelector('.hint');
const initializeGame = document.querySelector('.initializeGame');
const playBtn = document.querySelector('.playBtn')

if("webkitSpeechRecognition" in window){
    const speechObj = new webkitSpeechRecognition();
    const randomNum = Math.round(Math.random()*1000)

    micBtn.addEventListener("click", () => {
        speechObj.lang = "en-US";
        speechObj.start();
    })



    speechObj.addEventListener("result" , (e) => {
        guess = Number(e.results[0][0].transcript);

        guessDisplay.textContent = guess;
        guessDisplay.style.color = "red";


        if(guess > randomNum)
            hintDisplay.textContent = "go lower";
        else if(guess < randomNum)
            hintDisplay.textContent = "go higher";
        else if(!isNaN(guess)){
            hintDisplay.innerHTML = "correct answer";
            guessDisplay.style.color = "green";
            playBtn.style.visibility = "visible"
        }else
            hintDisplay.textContent = null;
        

        initializeGame.style.visibility = "visible";

    })
}else{
    alert("Speech Recognition API is not supported by your browser which means the game wouldn't work. :( ")
}
