import mysql from 'mysql2'


// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'notes_app'
// }).promise()




// connection.connect()

//  const result = await connection.query('SELECT * FROM notes', (err, rows, fields) => {
//     if (err) throw err
//     console.log('The solution is: ', rows[0].solution)
//   })

//  console.log("hello")

//  console.log(result)

//  connection.end()



const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'',
    database: 'notes_app',
  }).promise();
  
  
    //simple SELECT query

let result

let result2

    //simple SELECT query
 export async function getDetails()
    {
    try {
        const [results] = await connection.query(
            'SELECT * FROM notes'
        );
        return results
        //console.log(results); // results contains rows returned by server
        } catch (err) {
        console.log(err);
        }
    }

    //simple Select query by id

 export  async function getDetailsbyId(id)
        {
            try 
            {
                const [results] = await connection.query(
                'select * from notes where id = ?',[id]
                );
                //console.log("hello",results)
                return results
                console.log(results); // results contains rows returned by server
            } 
            
            catch (err) {
            console.log(err);
            }
    }

    //simple Insert query
    
 export async function AddInformation(title,content)
    {
        try 
        {
            const result = await connection.query(
                'insert into notes (title,contents) values (? , ?)',[title,content]
            )
            return result
            console.log(results); // results contains rows returned by server
        } 
            
        catch (err) {
        console.log(err);
        }
    }
    
    //simple Update query

 export async function UpdateInformation(title,content)
    {
        try{
            const result = await connection.query(
                "update notes set title = ?, contents = ?",[title,content]
            )

        }
        catch (err) {
            console.log(err);
            }
    }

    //simple delete query
 export async function deleteDetailsbyId(id)
    {
        try 
        {
            const [results] = await connection.query(
            'delete from notes where id = ?',[id]
            );
            return result
        } 
        
        catch (err) {
        console.log(err);
        }
}



//   console.log(await AddInformation("Jello","This is Another text"))

//   console.log(await UpdateInformation("Jello","This is Another text"))

//   console.log(await deleteDetailsbyId(1))

//   result = await getDetailsbyId(1)

//result2 = await getDetails()

//    console.log(result)

   //console.log(result2)
