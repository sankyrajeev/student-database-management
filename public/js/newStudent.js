const newFormHandler = async function(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#fname').value;
    const last_name = document.querySelector('#lname').value;
    
if(first_name && last_name){
    await fetch(`/api/input`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
  
    // document.location.replace('/dashboard');
    document.location.reload();
  }
  else{
    alert("Provide a valid first and last name");
  }
    
}

  document
    .querySelector('#btn')
    .addEventListener('click', newFormHandler);
  