async function analyzeMood() {
  const moodText = document.getElementById('moodInput').value.trim();
  if (!moodText) return;

  // Add to local journal
  addToJournal(moodText);

  // Simulate AI analysis (replace this with actual API if needed)
  const aiResponse = await fakeAIAnalysis(moodText);
  document.getElementById('aiResponse').innerText = `AI Insight: ${aiResponse}`;
  document.getElementById('moodInput').value = '';
}

function addToJournal(entry) {
  const history = JSON.parse(localStorage.getItem('moodJournal') || '[]');
  history.unshift(entry);
  localStorage.setItem('moodJournal', JSON.stringify(history));
  renderJournal();
}

function renderJournal() {
  const history = JSON.parse(localStorage.getItem('moodJournal') || '[]');
  const list = document.getElementById('journalHistory');
  list.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function fakeAIAnalysis(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple mock analysis
      if (text.includes('sad') || text.includes('down')) {
        resolve("It seems you're feeling low. Remember, it's okay to take a break.");
      } else if (text.includes('happy') || text.includes('great')) {
        resolve("Glad to hear you're feeling positive! Keep it up!");
      } else {
        resolve("Thank you for sharing. Reflecting on your emotions helps build awareness.");
      }
    }, 1000);
  });
}

// Initialize on load
renderJournal();
