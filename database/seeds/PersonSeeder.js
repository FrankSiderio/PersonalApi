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

      // Doin some interests...Make sure these are in the right oreder
      var titles = ['GitHub', 'APIs', 'Laravel', 'Eagles', 'Flyers', 'Phillies', 'Sixers', 'Baseball', 'Creating Sandcastles', 'Movies'];
      var descriptions = ['One of my favorite tools to use. It makes version control easy and fun. I cannot imagine development without it.', 'They are essential to most software applications. In my experience creating them with PHP and NodeJs has been a great learning experience and a lot of fun.', 'This is my favorite framework to use. It makes PHP elegant and easy. The documentation plus the tutorials available are the most extensive compared to other frameworks.', 'Having played football I also enjoyed watching the Eagles growing up. I hope that this year is our year. Fly Eagles Fly.', 'I was not much of a hockey fan until I got my first NHL video game (NHL 10). That started my love for the game and for the Flyers.', 'Since I played baseball and always went to the games when I was younger. I have always been a huge Phillies fan.', 'Yes I do trust the process and I always will. My dad was a big part of me becoming a Sixers fan. He watches every game.',
      'I played baseball most of my life and it used to be something I was committed to more than anything. I am still a fan for the game and for the Phillies.', 'Since I go to the beach a lot in the summer I picked up a hobby of creating sand castles. I have even participated in competitions.',
      'I always enjoyed watching movies as a kid. Now I am a huge fan of science fiction movies.'];
      var imagePaths = ['../images/interests/github.png', '../images/interests/apis.png', '../images/interests/laravel.jpg', '../images/interests/eagles.jpg', '../images/interests/flyers.jpg', '../images/interests/phillies.jpg', '../images/interests/sixers.png', '../images/interests/baseball.jpg', '../images/interests/castle.jpg', '../images/interests/scifi.png'];

      for(var i = 0; i < titles.length; i++) {
          const interest = new Interest();

          interest.title = titles[i];
          interest.description = descriptions[i];
          interest.imagePath = imagePaths[i];
          interest.person_id = 1;

          await interest.save();
      }
  }
}

module.exports = PersonSeeder
