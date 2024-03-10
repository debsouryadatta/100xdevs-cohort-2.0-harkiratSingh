// 1. Running the database.
// 2. Using a library that let’s you connect and put data in it.
// 3. Creating a table and defining it’s schema
// 4. Run queries on the database to interact with the data (Insert/Update/Delete)


import { Client } from "pg";

// Defining the client
const client = new Client({
  connectionString:
    "postgresql://debsouryadatta:ay9sNtUug2Wn@ep-fragrant-king-a11m6ein.ap-southeast-1.aws.neon.tech/cohort-week11-assignment1?sslmode=require",
});

// Creating the users table
async function createUsersTable() {
  await client.connect();

  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

// Async function to insert data into a table, but this code is open to sql injection attacks
async function insertData() {
  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// More Secure Way -> Async function to insert data into a table
async function insertData2(username: string, email: string, password: string) {
  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *; ";
    const values = [username, email, password];
    let res = await client.query(insertQuery, values);
    console.log("Insertion success:", res); // Output insertion result
    console.log(res.rows);
    
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
  try {
    await client.connect(); // Ensure client connection is established
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Creating the addresses table
async function createAddressesTable() {
  await client.connect();

  const result = await client.query(`
      CREATE TABLE addresses (
          id SERIAL PRIMARY KEY,
          user_id INTEGER NOT NULL,
          city VARCHAR(100) NOT NULL,
          country VARCHAR(100) NOT NULL,
          street VARCHAR(255) NOT NULL,
          pincode VARCHAR(20),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
        `);
  console.log(result);
}

// Inserting the Address to a specific user
async function insertAddress(user_id: number, city: string, country: string, street: string, pincode: string) {
    try {
      await client.connect(); // Ensure client connection is established
      // Use parameterized query to prevent SQL injection
      const insertQuery =
        "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
      const values = [user_id, city, country, street, pincode];
      const res = await client.query(insertQuery, values);
      console.log("Insertion success:", res); // Output insertion result
    } catch (err) {
      console.error("Error during the insertion:", err);
    } finally {
      await client.end(); // Close the client connection
    }
}

// Using Joins to fetch user data and their address together
async function getUserDetailsWithAddress(userId: string) {
try {
        await client.connect();
        const query = `
            SELECT *
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}



// createUsersTable();
// insertData();
insertData2('username10', 'user10@example.com', 'user_password').catch(console.error);
// getUser("user5@example.com").catch(console.error);
// createAddressesTable();
// insertAddress(1, 'New York', 'USA', '123 Bronderry St', '10003')
// getUserDetailsWithAddress("1");

