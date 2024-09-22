# Using `fetch` to call an API

## Send and Receive data

### JSON global object

JSON is a global object in JavaScript. It has two main methods for working with JSON data:

- **JSON.parse()**: Converts a JSON string into a JavaScript object.
- **JSON.stringify()**: Converts a JavaScript object into a JSON string.

### Receiving Data (GET request)

- The data received from the server is typically in `JSON format`, which is a **string**.
- You need to convert this JSON string into a JavaScript object or array of objects using `response.json()`
- When you use `fetch()` to make a request, the response you get is a **Response** object. The `json()` method of this Response object reads the response body and parses it as JSON, converting it into a JavaScript object or array.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())  // Converts JSON string to object/array
  .then(data => console.log(data))     // Now you can use the data as an object
  .catch(error => console.error('Error:', error));
```

### Sending Data (POST/PUT request)

- When sending data to the server, you typically send it as an object.
- You need to convert the JavaScript object into a JSON string using `JSON.stringify()` before sending it in the request body.

```javascript
const data = {
  name: 'John',
  age: 30
};

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)  // Converts object to JSON string
})
  .then(response => response.json())
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
```

> Receiving data: Convert JSON string to object using **response.json()**.
>
> Sending data: Convert object to JSON string using **JSON.stringify()**.

## fetch

- fetch() is a modern, built-in JavaScript function used to make network requests to APIs or web resources.
- It returns a Promise, which resolves once the request is complete.
- It can be used to make requests like GET, POST, PUT, DELETE, and others.

### Basic Syntax

```javascript
fetch('url', options)
  .then(response => response.json())  // Converts response to JSON
  .then(data => console.log(data))     // Logs data to console
  .catch(error => console.error('Error:', error));  // Handles errors

```

- **Promises**: fetch() returns a Promise, which allows handling asynchronous operations.
- **Chaining**: Use .then() to process the response and .catch() to handle any errors.
- **JSON**: Most APIs return data in JSON format, so we often use response.json() to parse it.

### Samples

#### Sample: GET Request

- A GET request is used to retrieve data from an API.
- This request fetches a post from an API, converts the response to JSON, and logs the data in the console.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')  // API endpoint
  .then(response => response.json())  // Parse response as JSON
  .then(data => console.log(data))    // Logs the data
  .catch(error => console.error('Error:', error));
```

#### Sample: POST Request

- A POST request is used to send data to the API (e.g., creating a new resource).
- This request sends a new post to the API. The body contains the data to send, and headers specify that the content is JSON.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',   // Specifies method as POST
  headers: {
    'Content-Type': 'application/json'  // Tells the server that the data is in JSON format
  },
  body: JSON.stringify({                // Converts JavaScript object to JSON
    title: 'New Post',
    body: 'This is the content of the new post.',
    userId: 1
  })
})
  .then(response => response.json())  // Parse response as JSON
  .then(data => console.log('Created:', data))  // Logs the newly created data
  .catch(error => console.error('Error:', error));
```

#### Sample: PUT Request (Updating Data)

- A PUT request is used to update existing data on the server.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Updated Post',
    body: 'This content has been updated.',
    userId: 1
  })
})
  .then(response => response.json())  // Parse response as JSON
  .then(data => console.log('Updated:', data))  // Logs updated data
  .catch(error => console.error('Error:', error));
```

#### Sample: DELETE Request

- A DELETE request removes a resource from the server.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'  // Specifies method as DELETE
})
  .then(() => console.log('Deleted'))  // Logs that the item was deleted
  .catch(error => console.error('Error:', error));
```
