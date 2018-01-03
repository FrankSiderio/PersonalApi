'use strict'

const Person = use('App/Models/Person')
const Interest = use('App/Models/Interest')

/*
|--------------------------------------------------------------------------
| PersonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class PersonSeeder {
  async run () {
      const person = new Person();

      person.firstName = 'Frank';
      person.lastName = 'Siderio';
      person.bio = 'I am a computer science major from the Philadelphia area and an adovacate for all Philly sports. 🦅 🔔 ⚾ 🏒';
      person.email = 'franksiderio@yahoo.com';

      await person.save();

      // Doin some interests
      const interest1 = new Interest();

      interest1.title = 'Eagles';
      interest1.description = 'Fly Eagles Fly';
      interest1.imagePath = '../images/interests/eagles.jpg';
      interest1.person_id = 1;

      await interest1.save();

      const interest2 = new Interest();

      interest2.title = 'Phillies';
      interest2.description = 'Baseball';
      interest2.imagePath = '../images/interests/phillies.jpg';
      interest2.person_id = 1;

      await interest2.save();

      const interest3 = new Interest();

      interest3.title = 'Sixers';
      interest3.description = 'Trust the process';
      interest3.imagePath = '../images/interests/sixers.png';
      interest3.person_id = 1;

      await interest3.save();

      const interest4 = new Interest();

      interest4.title = 'Flyers';
      interest4.description = 'Hockey';
      interest4.imagePath = '../images/interests/flyers.jpg';
      interest4.person_id = 1;

      await interest4.save();

      const interest5 = new Interest();

      interest5.title = 'Creating Sandcastles';
      interest5.description = 'fjdkslfjkslfs';
      interest5.imagePath = '../images/interests/castle.jpg';
      interest5.person_id = 1;

      await interest5.save();

  }
}

module.exports = PersonSeeder
