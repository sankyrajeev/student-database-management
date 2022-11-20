const newFormHandler = async function (event) {
  event.preventDefault();

  const first_name = document.querySelector('#fname').value;
  const last_name = document.querySelector('#lname').value;
  const Mathgrade = document.querySelector('#mathGrade').value;
  const Sciencegrade = document.querySelector("#scienceGrade").value;
  const Historygrade = document.querySelector("#historyGrade").value;
  const Geographygrade = document.querySelector("#geographyGrade").value;
  const Englishgrade = document.querySelector("#englishGrade").value;



  if (first_name && last_name && Mathgrade && Sciencegrade && Historygrade && Geographygrade && Englishgrade) {
    console.log(first_name);
    await fetch(`/api/input`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        Mathgrade,
        Sciencegrade,
        Historygrade,
        Geographygrade,
        Englishgrade
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    ;
    document.location.reload();
  }
  else {
    alert("Provide a valid first and last name");
  }

}

document
  .querySelector('#btn')
  .addEventListener('click', newFormHandler);


const deleteForm = async function (event) {

  const id = event.target.getAttribute('value');

  const response = await fetch(`/api/input/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to delete');
  }


};

document.querySelector('.delbtn').addEventListener('click', deleteForm);
