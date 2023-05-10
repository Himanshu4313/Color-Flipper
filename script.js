//Select Element
const simpleColor = document.getElementById('simple');
const heroSection = document.getElementById('heros-section');
const hexCodeText = document.getElementById('HexCode');
const clickMeButton = document.getElementById("clickMebtn");

// for simple
simpleColor.addEventListener("click", () => {
  heroSection.style.backgroundColor = "#F1f5f8";
  hexCodeText.innerText = "#F1f5f8";
});

function randomHexCode(){
    const hexCode = "ABCDEF0123456789";
    let hashSymbolplusHexCode = "#";
    for( let i = 0 ; i < 6 ; i++){
      let randomNumber = Math.floor(Math.random() * 16);
      hashSymbolplusHexCode += hexCode[randomNumber];
    }
    hexCodeText.innerText = hashSymbolplusHexCode;
    heroSection.style.backgroundColor = hashSymbolplusHexCode;
}

clickMeButton.addEventListener('click' ,() =>{
    randomHexCode()
});