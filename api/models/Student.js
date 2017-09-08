/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'students',

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    studentId: {
      type: 'string',
      required: true
    },

    grade: {
      type: 'string',
      required: true
    },

    dob: {
      type: 'date',
      required: true
    },

    locker: { 'model': 'Locker' },

    toJSON: function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
    }
  }
};
