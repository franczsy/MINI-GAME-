// lvl 3 function

document.addEventListener("DOMContentLoaded", function () {
    const badge = document.getElementById("badge");
    const levelUpBtn = document.getElementById("levelUpBtn");
   levelUpBtn.addEventListener("click", function () {
    const currentLevel = parseInt(badge.textContent.match(/\d+/)[0]);
    badge.innerHTML = `<i class="bi bi-bar-chart-steps me-1"></i> Level ${currentLevel + 1}`;
});
});


// lvl 4 function

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitName');
  const input = document.getElementById('heroName');
  const nextBtn = document.getElementById('nextLevelBtn');
  nextBtn.classList.add('disabled');
  nextBtn.style.pointerEvents = 'none';

  submitBtn.addEventListener('click', () => {
    const name = input.value.trim();

    if (name) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      const successDiv = document.getElementById('successText');
      if (successDiv) {
          successDiv.textContent = `Welcome, ${name}! ✅`;
          successDiv.style.display = 'block';
      }
      nextBtn.classList.remove('disabled');
      nextBtn.style.pointerEvents = 'auto';
      nextBtn.style.opacity = '1';

    } else {
 
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      nextBtn.classList.add('disabled');
      nextBtn.style.pointerEvents = 'none';
    }
  });
});
// lvl 5 function

document.addEventListener("DOMContentLoaded", function () {

  let coins = 0;

  const coinsDisplay = document.getElementById("coinsDisplay");
  const btnMinus = document.getElementById("btnMinus");
  const btnPlus = document.getElementById("btnPlus");

  coinsDisplay.textContent = "Coins: " + coins;
  btnPlus.addEventListener("click", function () {
    coins = coins + 1;
    coinsDisplay.textContent = "Coins: " + coins;
  });

  btnMinus.addEventListener("click", function () {
    if (coins > 0) {
      coins = coins - 1;
    }
    coinsDisplay.textContent = "Coins: " + coins;
  });
});

// lvl 6 function

document.addEventListener('DOMContentLoaded', () => {
  const doors = document.querySelectorAll('.door');
  const resultBox = document.getElementById('resultBox');
  const correctDoor = 3;
  doors.forEach(door => {
    door.addEventListener('click', () => {
      const selected = Number(door.dataset.door);
      if (selected === correctDoor) {
        resultBox.className = 'alert alert-success text-center';
        resultBox.textContent = `🎉 Door ${selected} is correct! You win!`;
      } else {
        resultBox.className = 'alert alert-danger text-center';
        resultBox.textContent = `❌ Door ${selected} is wrong. Try again!`;
      }
    });
  });
});