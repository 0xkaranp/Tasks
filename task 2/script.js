// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.value || !email.value || !message.value) {
    alert("All fields are required!");
    return;
  }

  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address!");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List DOM Manipulation
document.getElementById("addBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});
