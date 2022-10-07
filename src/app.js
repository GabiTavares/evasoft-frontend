const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function SqlQuery (sqlQry, res){
  var mysql = require('mysql');
  const connection = mysql.createConnection({
    //host: 'database-2.cafmle36xixe.sa-east-1.rds.amazonaws.com',
    //user: 'admin',
    //password: 'rogerio1992',
    //porta: '3306'
    
     host     : 'tcc.cbkvevgr7t6y.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'WRX8Baz1JaUyrd6zmsQd',
     port     : 3306,
     database: "DBTCC",
  });
  
  connection.query(sqlQry, (err, results) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    res.json(results)
    connection.end();  
    console.log('Connected to database.');
  });
}


app.get('/', (req, res) => {
  res.json({"users": ["userOne Roger", "userTwo", "userThree"]});
})
app.get('/marcas', (req, res) => {
      const teste = SqlQuery('SELECT DISTINCT * FROM ForkliftList', res)
      console.log(teste)
})
// app.get('/modelos', (req, res) => {
//   const teste = SqlQuery('SELECT DISTINCT MARCA FROM ForkliftList', res)
//   console.log(teste)
// })


app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })

app.listen(5000, () => {
    console.log('rodando');
});

