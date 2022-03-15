import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import knex from 'knex';
import { DB_SETINGS, SERVER_SETTINGS } from './lib/CONSTANTS.js';
import { getStudents } from './controllers/StudentCRUD.js';


const db = knex( {
  client: DB_SETINGS.CLIENT,
  connection: DB_SETINGS.ADDRESSES.REMOTE
});


const app = express();
app.use( bodyParser.json() );
app.use( cors() );



//db.select('*').from( DB_SETINGS.COLLECTIONS.STUDENT ).then( data => console.log('Students List : ',data) );



app.get( SERVER_SETTINGS.API_CALLS.DEFAULT, ( req, res ) => { res.json( "Server is Listening...!" ); } );

app.get( SERVER_SETTINGS.API_CALLS.STUDENT_REQUESTS.GET_STUDENTS, ( req, res ) => { getStudents( req , res, db ); } )

/*
app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})
		
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id',(req,res)=>{profileId.handleProfileGet(req,res, db)})

app.put('/image',(req,res)=>{image.handleImage(req,res, db)})
app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})
*/
//


// PORT 
const PORT = process.env.PORT || SERVER_SETTINGS.LISTENER.PORT;

app.listen( PORT , () => {
	console.log(`running on port: ${ PORT }`)
})
