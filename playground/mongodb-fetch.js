//const MongoClient = require('mongodb').MongoClient;
  const {MongoClient,ObjectID} =require('mongodb');
//responsible to connect to database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');//what ?

//.toArray()
  // db.collection('Users').find().toArray().then((docs)=>{
  //   console.log('Users');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos:',err);
  // });
/* write query inside find ({  --- here logic ---  })*/
  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos:',err);
  // });

/* count total no of users/documents*/
  // db.collection('Users').find().count().then((count)=>{
  //   console.log(`Users:${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos:',err);
  // });

  db.collection('Users').find({name:"Avi"}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos:',err);
  });


  //client.close();
});
