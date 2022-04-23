const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://yelpproject:codingisfun@cluster0.cf2bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(cors());
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));
app.use(express.json());

require("./controllers/users-controller")(app);
require("./controllers/bookmarks-controller")(app);
require("./controllers/user-following-controller")(app);
require("./controllers/auth-controller")(app);
require("./controllers/user-reviews-controller")(app);
require("./controllers/user-checkins-controller")(app);

app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(process.env.PORT || 4000);