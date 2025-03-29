document.getElementById("startButton").addEventListener("click", function () {
    const inputMinutes = parseInt(document.getElementById("timeInput").value);
  
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
      alert("Veuillez entrer un nombre de minutes valide.");
      return;
    }
  
    let totalSeconds = inputMinutes * 60;
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
  
    const interval = setInterval(() => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
  
      countdownElement.innerHTML = `
        <span id="minutes">${String(minutes).padStart(2, "0")}</span>:
        <span id="seconds">${String(seconds).padStart(2, "0")}</span>
      `;
  
      if (totalSeconds <= 0) {
        clearInterval(interval);
        messageElement.textContent = "Le temps est écoulé !";
      }
  
      totalSeconds--;
    }, 1000);
  });
  