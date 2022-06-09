require('./models/db');

const express = require('express');
const app = express();
const path = require('path');

const employeeModel = require('./models/employee');
/* const exphbs = require('express-handlebars');
const bodyparser = require('body-parser'); */

/* const employeeController = require('./controllers/employeeController'); */

/* var app = express(); */
/* app.use(bodyparser.urlencoded({
    extended: true
})); */
/* app.use(bodyparser.json()); */

/* app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs'); */

app.use(express.json());


app.get('/', async (req, res) => {
    const employee = new employeeModel({name: "Day", surname:"week", email:"dayweek@gmail.com", position:"Hr Manager"});
    try {
        await employee.save();
    } catch (err) {
        console.log(err);
    }
});



app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

/* app.use('/employee', employeeController); */