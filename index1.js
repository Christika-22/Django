const mongodb=require('mongodb').MongoClient;
const readline=require('readline');
const rl=readline.createInterface({
     input:process.stdin,
     output:process.stdout

});

async function createdatabase(){
    const client= await mongodb.connect("mongodb://127.0.0.1:27017/workers");
    if(client){
        console.log("Connected");
    }
    else{
        console.log("Discoonected");
    }
    const db=client.db('workers');
    const collection=await db.createCollection('Employee');
    if(collection){
        console.log("collection created");
    }
    else{
        console.log("collection failed");
    }
 async function updatedoc(collection){
    rl.question('Enter the emp_no:',(empno)=>{
    rl.question('Enter the new emp_name:',(empname)=>{
    rl.question('Enter the new dept:',(dept)=>{
        const filter={empno: parseInt(empno)};
        const update={
          $set:{
            empname:empname,
            dept:dept
          }
      };
      const updated = collection.updateOne(filter,update);
      if(updated){
        console.log("updated");
      }
      else{
        console.log("Updation failed");
      }

    });

    });
    });
 }
    updatedoc(collection);
}
createdatabase();



