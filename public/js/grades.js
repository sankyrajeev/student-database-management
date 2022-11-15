const gradeSubmit = async function(event) {
    event.preventDefault();
  
    // const gradeSubmitEL = document.querySelector('#add-btn');
    
  
    const response = await fetch('/api/input', {
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
    .querySelector('#add-btn')
    .addEventListener('click', gradeSubmit);
  