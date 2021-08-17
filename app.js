const express = require('express');
const db = require('./models');
const cors = require('cors');

const quoteRoute = require('./routes/quote');
const userRoute = require('./routes/user');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use("/user/quote", quoteRoute);
app.use("/user", userRoute);

db.sequelize.sync().then((req) => {
    app.listen(3000, () => { console.log("server running"); });
});

