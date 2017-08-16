/**
 * LockerController
 *
 * @description :: Server-side logic for managing Lockers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		Locker.find().sort('id ASC').exec(function (err, lockers) {
			return res.view({ lockers: lockers});
		});
	},

	new: function(req, res) {
		res.view();
	},

	create: function(req, res) {
		Locker.create(req('user')).exec(function afterwards(err, created) {
			return res.redirect('/lockers');
		});
	},

	edit: function(req, res) {
		Locker.findOne().where({'id': req.param('id')}).exec(function (err, locker) {
			return res.view({locker: locker});
		});
	},

	update: function(req, res) {
		var updateHash = {};
		var status = req.param('status');
		var lockerCombination = req.param('lockerCombination');
		var note = req.param('note');
		updateHash['status'] = status;

		if(lockerCombination.length > 0) {
			updateHash['lockerCombination'] = lockerCombination;
		}

		if(note.length > 0) {
			updateHash['note'] = note;
		}

		Locker.update({id: req.param('id')}, updateHash).exec(function afterwards(err, updated) {
			return res.redirect('/lockers');
		});
	},

	destroy: function(req, res) {
		Locker.destroy({id: req.param('id')}).exec(function afterwards(err, destroyed) {
			return res.redirect('/lockers');
		});
	}
};
