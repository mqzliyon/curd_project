const mongoose = require('mongoose');

const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
    } catch (e) {
        console.log(e);
    }
}

module.exports = DatabaseConnection