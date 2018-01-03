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
      workExperience1.description = 'I was involved on the mobile android team. I worked with many developers on features and bug fixes. I even was apart of creating a test app for geofence testing. I gained experience with AWS, Android Studio, APIs, Java, and Retrofit.'
      workExperience1.company = 'Wawa Inc';
      workExperience1.current = false;
      workExperience1.previewImagePath = '../images/wawa_app.png';
      workExperience1.imagePath = '../images/experience/wawa_mobile.png';
      workExperience1.url = 'https://play.google.com/store/apps/details?id=com.wawa.android.appv2&hl=en';
      workExperience1.person_id = 1;

      await workExperience1.save();

      const workExperience2 = new WorkExperience();

      workExperience2.position = 'CIO';
      workExperience2.preview = 'Within Student Government I serve as the liason between the student body and Marist IT.';
      workExperience2.description = 'In Student Government I lead a team who are responsible for improving and supporting the software applications for SGA and Student Activities. My team has developers, QA Testers, Designers, etc. We work wil Linux, Apache, MySql, and PHP.'
      workExperience2.company = 'Marist SGA';
      workExperience2.current = true;
      workExperience2.previewImagePath = '../images/marist_seal.png';
      workExperience2.imagePath = '../images/experience/sga.png';
      workExperience2.url = 'https://sga.marist.edu';
      workExperience2.person_id = 1;

      await workExperience2.save();

      const workExperience3 = new WorkExperience();

      workExperience3.position = 'Instructor';
      workExperience3.preview = 'I taught many different classes including minecraft moding and learning how to program with JavaScript.';
      workExperience3.description = 'At iD Tech I was able to teach kids about technology. I taught classes on how to program with JavaScript. Creating different skins and models in minecraft. And my favorite I taught a Minecraft modding class.';
      workExperience3.company = 'iD Tech';
      workExperience3.current = false;
      workExperience3.previewImagePath = '../images/id_tech.jpg';
      workExperience3.imagePath = '../images/experience/id_tech.png';
      workExperience3.url = 'https://www.idtech.com/';
      workExperience3.person_id = 1;

      await workExperience3.save();

  }
}

module.exports = WorkExperienceSeeder
