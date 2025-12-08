const addXpButton = document.querySelector('.add-xp-button');

const removeXpButton = document.querySelector('.remove-xp-button');

const progressBarFill = document.querySelector('.progress-bar-fill');

const totalXpElement = document.querySelector('#total-xp');

const levelElement = document.querySelector('#hero-level');
/*-----------------------------------------------------------*/

var totalXp = 0;
var level = 1;
var limitLevel = 1;
var totalXpLevel = 100;
var xpLevel = 0;

addXpButton.addEventListener('click', () => {
  totalXp = totalXp + 10;
  xpLevel = xpLevel + 10;
  totalXpElement.textContent = totalXp;
  progressBarFill.style.width = `${(xpLevel/totalXpLevel)*100}%`;
  
  if(xpLevel >= totalXpLevel){
    xpLevel = 0;
    progressBarFill.style.width = `${0}%`;
    level = level + 1;
    levelElement.textContent = level;
    limitLevel = 1 + 0.1* level;
  totalXpLevel = (100 * limitLevel) - 10;
  }
});


removeXpButton.addEventListener('click', () => {
   totalXp = totalXp - 10;
  xpLevel = xpLevel - 10;
  totalXpElement.textContent = totalXp;
  progressBarFill.style.width = `${(xpLevel/totalXpLevel)*100}%`;
  
  if(xpLevel < 0 && level > 1){
    level = level - 1;
    levelElement.textContent = level;
    limitLevel = 1 + 0.1* level;
    totalXpLevel = (100 * limitLevel) - 10;
    xpLevel = totalXpLevel + xpLevel;
    progressBarFill.style.width = `${(xpLevel/totalXpLevel)*100}%`;
  }
  
  if(totalXp < 0){
    totalXp = 0;
    xpLevel = 0;
    totalXpElement.textContent = totalXp;
  }
});
