import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import knex from 'knex';
import { DB_SETINGS, SERVER_SETTINGS } from './lib/CONSTANTS.js';
import { getStudents, setStudent } from './controllers/StudentCRUD.js';
import { getBooks, setBook } from './controllers/BookCRUD.js';

//  Edit paths from CONSTANTS file in Lib Dir
const db = knex( {
  client: DB_SETINGS.CLIENT,
  connection: DB_SETINGS.ADDRESSES.REMOTE
});


const app = express();
app.use( bodyParser.json() );
app.use( cors() );


//  Pinging to server with general query
db.select('*').from( DB_SETINGS.COLLECTIONS.STUDENT ).then( data => console.log('#') );

//  DEFUALT API CALLs
app.get( SERVER_SETTINGS.API_CALLS.DEFAULT, ( req, res ) => { res.json( "Server is Listening...!" ); } );

//  STUDENT API CALLs
app.get( SERVER_SETTINGS.API_CALLS.STUDENT_REQUESTS.GET_STUDENTS, ( req, res ) => { getStudents( req , res, db ); } )
app.post( SERVER_SETTINGS.API_CALLS.STUDENT_REQUESTS.SET_STUDENT, ( req, res ) => { setStudent( req , res, db ); } )


//  BOOK API CALLs
app.get( SERVER_SETTINGS.API_CALLS.BOOK_REQUESTS.GET_BOOKS, ( req, res ) => { getBooks( req , res, db ); } )
app.post( SERVER_SETTINGS.API_CALLS.BOOK_REQUESTS.SET_BOOK, ( req, res ) => { setBook( req , res, db ); } )


// PORT 
const PORT = process.env.PORT || SERVER_SETTINGS.LISTENER.PORT;

app.listen( PORT , () => {
	console.log(`running on port: ${ PORT }`)
})
