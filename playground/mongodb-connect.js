const MongoClient = require('mongodb').MongoClient;
//responsible to connect to database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');//what ?

  // db.collection('Todos').insertOne({
  //   text:'Something to do ',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }//.ops- everything is document
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name:'Avi',
    age:22,
    location:'indore'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert user',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  client.close();
});
