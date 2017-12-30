'use strict'

const Project = use('App/Models/Project')

/*
|--------------------------------------------------------------------------
| ProjectSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class ProjectSeeder {
  async run () {
      const project1 = new Project();

      project1.name = 'Capping';
      project1.preview = 'Powered by Laravel this application makes a life coaches job much easier.';
      project1.imagePath = '../images/laravel.png';
      project1.person_id = 1;

      await project1.save();

      const project2 = new Project();

      project2.name = 'Operating System';
      project2.preview = 'A fully functional command based operating system built with TypeScript.';
      project2.imagePath = '../images/type_script.png';
      project2.person_id = 1;

      await project2.save();

      const project3 = new Project();

      project3.name = 'MLB Scoreboard';
      project3.preview = 'A Python project that uses API to display MLB scores with an Arduino kit.';
      project3.imagePath = '../images/python.png';
      project3.person_id = 1;

      await project3.save();

  }
}

module.exports = ProjectSeeder
