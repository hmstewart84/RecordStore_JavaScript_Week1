var Record = require('../record');
var assert = require('assert');

describe('record', function(){

  it( 'should have an artist', function() {
    var record = new Record( {artist:'Charley', title: "Charley Chants", price: 12.99} );
    assert.equal( record.artist, 'Charley' );
  });

  it( 'should have a title', function() {
    var record = new Record( {artist: 'Kat', title: 'Mama Preaches', price: 5.99} );
    assert.equal( record.title, 'Mama Preaches' );
  })

  it( 'should have a price', function() {
    var record = new Record( {artist: 'Kat', title: 'Mama Preaches', price: 5.99} );
    assert.equal( record.price, 5.99 );
  })

})