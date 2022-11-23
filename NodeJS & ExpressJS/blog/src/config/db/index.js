const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/haduc25_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection Successfully!');
    } catch (error) {
        console.log('Connection Failure!', error);
    }
}

module.exports = { connect };
