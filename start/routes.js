'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.get('/people', 'PersonController.index');
Route.get('/person/:personId', 'PersonController.show');
Route.get('/education/:personId', 'EducationController.show')
Route.get('/interests/:personId', 'InterestController.show')
Route.get('/skills/:personId', 'SkillController.show')
Route.get('/work/:personId', 'WorkExperienceController.show')
Route.get('/projects/:personId', 'ProjectController.show')

Route.post('/feedback', 'FeedbackController.store')
