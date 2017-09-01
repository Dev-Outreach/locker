/**
 * Locker.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'lockers',

  attributes: {
    lockerNumber: {
      type: 'string',
      required: true
    },

    location: {
      type: 'string',
      required: true
    },

    lockerCombination: {
      type: 'string',
      defaultsTo: null
    },

    status: {
      type: 'string',
      required: true,
      enum: ['VACANT', 'OCCUPIED'],
      defaultsTo: 'VACANT'
    },

    note: {
      type: 'string',
      defaultsTo: null
    },

    lockerComposite: {
      type: 'string',
      unique: true
    },

    student: { model: 'Student' },

    toJSON: function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
    }
  },

  beforeValidation : function(values,cb) {
    values.lockerComposite = values.lockerNumber+'-'+values.location;
    cb();
  }

};
