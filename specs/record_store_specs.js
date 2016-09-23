var Record = require('../record');
var RecordStore = require('../record_store');
var assert = require('assert');

describe( 'recordstore', function() {
  
  it('should be able to add record', function(){
  var recordstore = new RecordStore({name: "Fopp", city: "Glasgow", balance: 500});
  var record = new Record( {artist:'Charley', title: "Charley Chants", price: 12.99} );
  recordstore.addRecord( record );
  assert.deepEqual( record, recordstore.records[0]  );
  })



})