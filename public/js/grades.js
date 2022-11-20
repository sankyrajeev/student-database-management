// 

const gradeFormHandler = async function(event) {
  event.preventDefault();

  const mathEl = document.querySelector('#mathGrade');
  const scienceEl = document.querySelector('#scienceGrade');
  const historyEl = document.querySelector('#historyGrade');
  const geographyEl = document.querySelector('#geographyGrade');
  const englishEl = document.querySelector("#englishGrade")

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/input');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

