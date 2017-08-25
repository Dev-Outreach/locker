/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  '/': {
    controller: 'AuthController',
    action: 'new'
  },

  'POST /session/create': {
      controller: 'AuthController',
      action: 'create'
  },
  'POST /session/delete': {
      controller: 'AuthController',
      action: 'delete'
  },

  'GET /signup': {
    controller: 'UserController',
    action: 'signup'
  },

  'POST /signup': {
    controller: 'UserController',
    action: 'create'
  },

  'GET /user': {
      controller: 'UserController',
      action: 'index'
  },

  'GET /lockers': {
    controller: 'LockerController',
    action: 'index'
  },

  'GET /lockers/new': {
    controller: 'LockerController',
    action: 'new'
  },

  'POST /lockers/create': {
    controller: 'LockerController',
    action: 'create'
  },

  'GET /lockers/:id/edit': {
    controller: 'LockerController',
    action: 'edit'
  },

  'POST /lockers/:id/update': {
    controller: 'LockerController',
    action: 'update'
  },

  'POST /lockers/:id/destroy': {
    controller: 'LockerController',
    action: 'destroy'
  },

  'GET /students': {
    controller: 'StudentController',
    action: 'index'
  },

  'GET /students/new': {
    controller: 'StudentController',
    action: 'new'
  },

  'POST /students/create': {
    controller: 'StudentController',
    action: 'create'
  },

  'GET /students/:id/edit': {
    controller: 'StudentController',
    action: 'edit'
  },

  'POST /students/:id/update': {
    controller: 'StudentController',
    action: 'update'
  },

  'POST /students/:id/destroy': {
    controller: 'StudentController',
    action: 'destroy'
  }
};
