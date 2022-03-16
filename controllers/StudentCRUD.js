import { DB_SETINGS } from '../lib/CONSTANTS.js';

/**
 *  getStudents(...)
 *    
 *    returns all records present in table 
 * 
 * @param {any} req 
 * @param {any} res 
 * 
 * @returns {array} data
 * 
 */
export const getStudents = ( req, res, db ) => {
  db.select( '*' ).from( DB_SETINGS.COLLECTIONS.STUDENT )
	.then( data => {
    if( data != null ) res.json( data );
  } ).catch( err => res.status(400).json( { success : false } ) );
}

/**
 *  setStudent(...)
 *    
 *    updates a record in table 
 * 
 * @param {any} req 
 * @param {any} res 
 * 
 * @returns {boolean} success
 * 
 */
export const setStudent = ( req, res, db ) => {
  
  db.select( '*' ).from( DB_SETINGS.COLLECTIONS.STUDENT ).where( "user_id", req.body.user_id )
  .update( req.body ).then( data => { 
    if( data != null ) res.json( { success : true } );
  } ).catch( err => res.status(400).json( { success : false } ) );
}
