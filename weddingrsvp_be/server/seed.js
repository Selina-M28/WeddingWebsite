const { client } = require('./db');

const seedGuests = async () => {
  try {
    console.log('Seeding guests...');
    await client.query(`
      INSERT INTO guests (name, email, address, rsvp_status, meal_preference, notes)
      VALUES 
        ('John Doe', 'john@example.com', '123 Main St, Cityville', 'Accepted', 'Chicken', 'Allergic to peanuts'),
        ('Jane Smith', 'jane@example.com', '456 Elm St, Townsville', 'Pending', 'Vegetarian', 'Prefers window seat'),
        ('Alex Johnson', 'alex@example.com', '789 Oak St, Villageville', 'Declined', 'Fish', 'Bringing spouse');
    `);
    console.log('Seeding complete! ');
  } catch (error) {
    console.error('Error seeding guests:', error);
  }
};

const init = async () => {
  try {
    await client.connect();
    console.log('Connected to database ');
    await seedGuests();
  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
};

init();