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

Route.get('/api/people', 'PersonController.index');
Route.get('/api/person/:personId', 'PersonController.show');
Route.get('/api/education/:personId', 'EducationController.show')
Route.get('/api/interests/:personId', 'InterestController.show')
Route.get('/api/skills/:personId', 'SkillController.show')
Route.get('/api/work/:personId', 'WorkExperienceController.show')

Route.post('/feedback', 'FeedbackController.store')
