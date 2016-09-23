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

  it('should find record by artist name', function(){
    var recordstore = new RecordStore({name: "Fopp", city: "Glasgow", balance: 500});
    var record = new Record({artist: 'Charley', title: "Charley Chants", price: 12.99});
    recordstore.addRecord( record );
    var foundRecord = recordstore.findRecordByArtist('Charley');
    assert.deepEqual(record, foundRecord);
  });

  it( 'should list the inventory', function() {
    var recordstore = new RecordStore( {name: "Fopp", city: "Glasgow", balance: 500} );
    var record1 = new Record( {artist: "Charley", title: "Charley Chants", price: 12.99} );
    var record2 = new Record( {artist: "Kat", title: "Mama Preaches", price: 5} );
    recordstore.addRecord( record1 );
    recordstore.addRecord( record2 );
    console.log(recordstore.listInventory());
  })

  



})