'use strict'

const WorkExperience = use('App/Models/WorkExperience')


/*
|--------------------------------------------------------------------------
| WorkExperienceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class WorkExperienceSeeder {
  async run () {
      const workExperience1 = new WorkExperience();

      workExperience1.position = 'Developer';
      workExperience1.preview = 'On the mobile app team I worked on creating and improving the mobile ordering experience.';
      workExperience1.company = 'Wawa Inc';
      workExperience1.current = false;
      workExperience1.imagePath = '../images/wawa_app.png';
      workExperience1.person_id = 1;

      await workExperience1.save();

      const workExperience2 = new WorkExperience();

      workExperience2.position = 'CIO';
      workExperience2.preview = 'At Student Government I serve as the liason between the student body and the administration.';
      workExperience2.company = 'Marist SGA';
      workExperience2.current = true;
      workExperience2.imagePath = '../images/marist_seal.png';
      workExperience2.person_id = 1;

      await workExperience2.save();

      const workExperience3 = new WorkExperience();

      workExperience3.position = 'Instructor';
      workExperience3.preview = 'I taught many different classes including minecraft moding and learning how to program with JavaScript.';
      workExperience3.company = 'iD Tech';
      workExperience3.current = false;
      workExperience3.imagePath = '../images/id_tech.jpg';
      workExperience3.person_id = 1;

      await workExperience3.save();

  }
}

module.exports = WorkExperienceSeeder
