const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('Magin happens on port ', app.get('port'));
});
