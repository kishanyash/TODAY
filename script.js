
const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');

let completedTasks = 0;

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputFields].every(input => input.value.trim() !== '');
    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle('completed');
      if (checkbox.parentElement.classList.contains('completed')) {
        completedTasks++;
      } else {
        completedTasks--;
      }
      updateProgress();
      errorLabel.style.display = 'none';
    } else {
      errorLabel.style.display = 'block';
    }
  });
});

function updateProgress() {
    const completedGoals = [...checkBoxList].filter(checkbox => checkbox.parentElement.classList.contains('completed')).length;
    const totalGoals = checkBoxList.length;
    const progressPercentage = (completedGoals / totalGoals) * 100;
    
    // Update the width of the progress bar
    progressValue.style.width = progressPercentage + '%';
    
    // Update the text content of the progress bar
    progressValue.textContent = `${completedGoals}/${totalGoals} Completed`;
  
    // Hide the progress bar if no goals are completed
    if (completedGoals === 0) {
      progressValue.style.display = 'none';
    } else {
      progressValue.style.display = 'flex'; // Assuming flex was the original display style
    }
  }
  
  // Initial call to set the progress on page load
  updateProgress();
  