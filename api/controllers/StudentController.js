/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		Student.find().sort('id ASC').exec(function (err, students) {
			return res.view({ students: students});
		});
	},

	new: function(req, res) {

	},

	create: function(req, res) {

	},

	edit: function(req, res) {

	},

	update: function(req, res) {

	},

	destroy: function(req, res) {

	}
};
