const firstNames = ['John', 'Jane', 'Mark', 'Sarah', 'Emily', 'David', 'Chris', 'Mary'];
const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Garcia', 'Martinez', 'Lee', 'Taylor'];
const statuses = ['First-Contact', 'Under Contract', 'New Lead', 'Closing', 'Prospect'];
const marketAreas = ['North', 'South', 'East', 'West'];

function generatePhoneNumber() {
    let phoneNumber = '';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
}

function generateRandomObject() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = generateEmail(firstName, lastName);
    const phoneNumber = generatePhoneNumber();
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const buying = Math.random() < 0.5;
    const selling = Math.random() < 0.5;
    const marketArea = marketAreas[Math.floor(Math.random() * marketAreas.length)];
    console.log({ firstName, lastName, email, phoneNumber, status, buying, selling, marketArea });
    return { firstName, lastName, email, phoneNumber, status, buying, selling, marketArea };
}

const randomObjects = Array.from({ length: 50 }, () => generateRandomObject());

console.log(randomObjects);