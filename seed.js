// seed.js
const sequelize = require('./database');
const Department = require('./models/department');
const Person = require('./models/person');

const seedData = async () => {
  await sequelize.sync({ force: true });

  const departments = await Department.bulkCreate([{ name: 'General' }, { name: 'Information Communications Technology' }, { name: 'Finance' }, { name: 'Marketing' }, { name: 'Human Resources' }]);

  await Person.bulkCreate([
    { name: 'John Smith', phone: '02 9988 2211', departmentId: departments[0].id, street: '1 Code Lane', city: 'Javaville', state: 'NSW', zip: '0100', country: 'Australia' },
    { name: 'Sue White', phone: '03 8899 2255', departmentId: departments[1].id, street: '16 Bit way', city: 'Byte Cove', state: 'QLD', zip: '1101', country: 'Australia' },
    { name: "Bob O' Bits", phone: '05 7788 2255', departmentId: departments[2].id, street: '8 Silicon Road', city: 'Cloud Hills', state: 'VIC', zip: '1001', country: 'Australia' },
    { name: 'Mary Blue', phone: '06 4455 9988', departmentId: departments[1].id, street: '4 Processor Boulevard', city: 'Appletson', state: 'NT', zip: '1010', country: 'Australia' },
    { name: 'Mick Green', phone: '02 9988 1122', departmentId: departments[2].id, street: '700 Bandwidth Street', city: 'Bufferland', state: 'NSW', zip: '0110', country: 'Australia' },
  ]);
};

seedData().then(() => {
  console.log('Database synced and data seeded');
  process.exit();
});
