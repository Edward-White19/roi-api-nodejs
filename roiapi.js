// Values
const activityId = Number(process.argv[2]);
const domainName = 'http://localhost:3000';

switch (activityId) {
  // Retrieve people.
  case 0:
    console.log('case');
    fetch(domainName + '/api/people')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    break;

  // Retrieve specific person.
  case 1:
    fetch(domainName + '/api/people/1')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    break;

  // Modify specific person.
  case 2:
    const newData = {
      name: 'NewName',
      age: 30
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };

    fetch(domainName + '/api/people/1', options)
      .then(response => response.json())
      .then(result => console.log('Success:', result))
      .catch(error => console.error('Error:', error));
    break;
}
