//get all needed dom elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;
//Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the form
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  // Increment the count and display it
  count++;

  // Update attendee count on the page
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  // Update progress bar width
  const progressBar = document.getElementById("progressBar");
  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = percentage + "%";

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show welcome message
  const greeting = document.getElementById("greeting");
  greeting.textContent = `🎉 Welcome, ${name} from ${teamName}!`;
  greeting.style.display = "block";

  // Show celebration if goal is met
  if (count >= maxCount) {
    greeting.textContent = `🎉 Goal met! ${count} attendees checked in! 🎉`;
    greeting.classList.add("success-message");
  } else {
    greeting.classList.remove("success-message");
  }

  form.reset();
});
