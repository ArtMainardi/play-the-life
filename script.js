const addXpButton = document.querySelector('#add-xp-button');
const removeXpButton = document.querySelector('#remove-xp-button');
const progressBarFill = document.querySelector('.progress-bar-fill');
const totalXpElement = document.querySelector('#total-xp');
const levelElement = document.querySelector('#hero-level');
const heroPage = document.querySelector('#hero-page');
const tasksPage = document.querySelector('#tasks-page');
const navHeroButton = document.querySelector('#nav-hero-button');
const navTasksButton = document.querySelector('#nav-tasks-button');
const newTaskName = document.querySelector('#new-task-name');
const newTaskPillar = document.querySelector('#new-task-pillar');
const addTaskButton = document.querySelector('#add-task-button');
const tasksList = document.querySelector('#tasks-list');
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

// -------------------------------------------------------------

navTasksButton.addEventListener('click', () => {
  heroPage.style.display = 'none';
  tasksPage.style.display = 'block';
});
navHeroButton.addEventListener('click', () => {
  heroPage.style.display = 'block';
  tasksPage.style.display = 'none';
});

// ---------------------------------------------------------------

addTaskButton.addEventListener('click', () => {
  const taskName = newTaskName.value;
  const taskPillar = newTaskPillar.value;
  
  if (taskName === '' || taskPillar === '') {
    alert('Por favor, preencha o nome e o pilar da missão!');
    return;
  }
  
  const taskElement = document.createElement('div');
  taskElement.classList.add('task-item');
  taskElement.classList.add(`task-${taskPillar}`);
  
  taskElement.innerHTML = `
  <input type="checkbox" class="task-checkbox">
  <span class="task-name">${taskName}</span>
  <span class="task-reward">+10 XP</span>
  `;
  
  tasksList.appendChild(taskElement);
  
  // ------------------
  const newCheckbox = taskElement.querySelector('.task-checkbox'); 
  newCheckbox.addEventListener('change', () => {
    if (newCheckbox.checked) {
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
      
      taskElement.style.textDecoration = 'line-through';
      taskElement.style.opacity = '0.5';
    }else {
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

      taskElement.style.textDecoration = 'none';
      taskElement.style.opacity = '1';
    }
  });
});
