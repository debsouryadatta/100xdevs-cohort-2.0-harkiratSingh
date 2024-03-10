Relationships in sql

-> One table is connected to another table through a foreign key, suppose the foreign key is userId here. Suppose we have 2 collections, users & addresses. The addresses collection has a foreign key userId which is the primary key of the users collection. So, the relationship between the users and addresses collection is one-to-many.


The schemas for the both would look like this:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

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

-> In addresses schema, we mention the FOREIGN KEY so that the user_id in the addresses collection is connected to the id in the users collection. And no address can be added if there exists no user with the given id. This connection between the tables also helps during the Joins operation.

-> Also, if a user is deleted, all the addresses associated with that user will also be deleted. This is done by ON DELETE CASCADE.