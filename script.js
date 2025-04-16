// IMAGEM


// RELOGIO
function getParaibaTime() {
    const nowUTC = new Date();
    const offset = nowUTC.getTimezoneOffset();
    return new Date(nowUTC.getTime() + offset * 60000 - 3 * 60 * 60 * 1000);
  }
  
  const inicio = new Date(Date.UTC(2025, 0, 18, 22, 0, 0)); // 18/01/2025 às 19h (UTC-3)
  
  function updateCounter() {
    const agora = getParaibaTime();
    const diff = agora - inicio;
  
    if (diff < 0) return;
  
    const start = new Date(inicio.getTime());
    let years = agora.getFullYear() - start.getFullYear();
    let months = agora.getMonth() - start.getMonth();
    const day = agora.getDate();
  
    if (day < 18) months--;
    if (months < 0) {
      months += 12;
      years--;
    }
  
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = day;
    document.getElementById("hours").textContent = agora.getHours();
    document.getElementById("minutes").textContent = agora.getMinutes();
    document.getElementById("seconds").textContent = agora.getSeconds();
  
    const boxes = document.querySelectorAll(".box");
  
    // Aplica brilho no dia 18
    if (day === 18) {
      boxes.forEach(box => box.classList.add("glow"));
    } else {
      boxes.forEach(box => box.classList.remove("glow"));
    }
  }
  
  setInterval(updateCounter, 1000);
  updateCounter();
  