import app from './app.js'

app.listen(app.get('port'))

console.log('server port: ',app.get('port'));   
