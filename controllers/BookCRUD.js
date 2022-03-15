import { DB_SETINGS } from '../lib/CONSTANTS.js';

/**
 *  getBooks(...)
 *    
 *    returns all records present in table 
 * 
 * @param {any} req 
 * @param {any} res 
 * 
 * @returns {array} data
 * 
 */
export const getBooks = ( req, res, db ) => {
  db.select( '*' ).from( DB_SETINGS.COLLECTIONS.BOOK )
	.then( data => {
    if( data != null ) res.json( data );
  } ).catch( err => res.status(400).json( { success : false } ) );
}

/**
 *  setBook(...)
 *    
 *    updates a record in table 
 * 
 * @param {any} req 
 * @param {any} res 
 * 
 * @returns {boolean} success
 * 
 */
export const setBook = ( req, res, db ) => {
  
  db.select( '*' ).from( DB_SETINGS.COLLECTIONS.BOOK ).where( "id", req.body.id )
  .update( req.body.fields ).then( data => {
    if( data != null ) res.json( { success : true } );
  } ).catch( err => res.status(400).json( { success : false } ) );
}
