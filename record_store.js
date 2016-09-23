var RecordStore = function( params ) {
  this.records = [];
  this.name = params.name;
  this.city = params.city;
  if (params.balance === undefined){
    this.balance = 0;
  }
  else {
    this.balance = params.balance
    }
  }

RecordStore.prototype = {
  addRecord: function( record ) {
    this.records.push( record );
  }
}

module.exports = RecordStore;