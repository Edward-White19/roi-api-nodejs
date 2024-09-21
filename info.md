# ROI API - Node Version - 2024

Yes, you need to install several `npm` packages to run the application. Here’s a list of the required npm packages:

## Required npm Packages

- **express** - For building the web server.
- **sequelize** - For working with the SQLite database.
- **sqlite3** - The SQLite database driver.
- **cors** - To handle Cross-Origin Resource Sharing.
- **nodemon** (optional) - For automatically restarting the server during development when changes are detected.

## Installation Command

You can install all of these packages with the following command:

```bash
npm install express sequelize sqlite3 cors
```

If you want to use `nodemon` for development:

```bash
npm install --save-dev nodemon
```

## Sync Database and Seed Data

Run the seed script if you did not before

```bash
node seed.js
```

## Running the Application

After installing the dependencies, you can run the application with:

```bash
node app.js
```

Or if you're using nodemon:

```bash
npx nodemon app.js
```

## Package file

scripts:

- **start**: Runs your application with Node.js.
- **dev**: Runs your application with nodemon for development, which automatically restarts the server on file changes.

dependencies: The libraries your application needs to run:

- **cors**: To handle CORS.
- **express**: The web framework.
- **sequelize**: The ORM for database interactions.
- **sqlite3**: The SQLite database driver.

devDependencies: Development dependencies:

- **nodemon**: For automatically restarting the server during development.
