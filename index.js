var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv'),
  mongoose= require('mongoose');

var app = express();
var env = process.env.NODE_ENV || 'dev';

if (env == 'dev') {
  dotenv.config();
};
app.use(morgan('tiny'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


app.use('/', require('./routes/index'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'),()=>{
  console.log("\u{1F525}\u{1F680} app listen on port",app.get('port'),"\u{1F525}\u{1F680}")
});

//connect to database
mongoose.connect(process.env.MONGO_URL,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(()=>{console.log("\u{1F525}\u{1F680} DB is connected \u{1F525}\u{1F680}")})

//running cron job
require('./crons/index')();

