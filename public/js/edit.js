const editFormhandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#fname').value;
    const last_name = document.querySelector('#lname').value;
    const Mathgrade = document.querySelector('#mathGrade').value;
    const Sciencegrade = document.querySelector("#scienceGrade").value;
    const Historygrade = document.querySelector("#historyGrade").value;
    const Geographygrade = document.querySelector("#geographyGrade").value;
    const Englishgrade = document.querySelector("#englishGrade").value;


    console.log(title, content)
    // if(title && content) {
    await fetch(`/api/input/${student.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            first_name,
            last_name,
            Mathgrade,
            Sciencegrade,
            Historygrade,
            Geographygrade,
            Englishgrade
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    //  if (response.ok) {
    document.location.reload();
    console.log(student.id);

};

document.querySelector('#headingstyling').addEventListener('submit', editFormhandler);