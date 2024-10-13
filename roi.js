////////////////////////////////////////////////////////////////
//// CONSTANTS                                              ////
////////////////////////////////////////////////////////////////


const domainName = 'http://localhost:3000';
const urlPeople = domainName + '/api/people';


////////////////////////////////////////////////////////////////
//// FUNCTIONS                                              ////
////////////////////////////////////////////////////////////////


// Add new person.
async function addPerson(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  await fetch(urlPeople, options)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
}

// Update existing person.
async function updatePerson(id, data) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  await fetch(urlPeople + '/' + id, options)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
}

// Delete existing person.
async function deletePerson(id) {
  const options = {
    method: 'DELETE'
  }

  await fetch(urlPeople + '/' + id, options)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
}

// List existing person.
async function listPerson(id) {
  await fetch(urlPeople + '/' + id)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// List ALL people.
async function listAllPeople() {
  await fetch(urlPeople)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


////////////////////////////////////////////////////////////////
//// SEQUENCE                                               ////
////////////////////////////////////////////////////////////////


// console.log(process.argv[0]);
// console.log(process.argv[1]);

// Get parameters.
const task = process.argv[2].toLowerCase();
const id = process.argv[3];
const userData = {
  name: 'JS Post',
  phone: '02 1234 5678',
  street: '12 ThreeFour Street',
  city: 'FiveSix',
  state: 'NSW',
  zip: '7890',
  country: 'Australia',
  departmentId: 1
}

// Perform task.
switch (task) {
  case 'add':
    addPerson(userData);
    break;

  case 'update':
    updatePerson(id, userData);
    break;

  case 'delete':
    deletePerson(id);
    break;

  case 'list':
    listPerson(id);
    break;

  case 'all':
    listAllPeople();
}
