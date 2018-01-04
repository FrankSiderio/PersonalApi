'use strict'

const Feedback = use('App/Models/Feedback')
const { validateAll } = use('Validator')
const Mail = use('Mail')

class FeedbackController {
    /**
     * Stores feedback to the database
     * @param  {json}  request
     * @param  {json}  response
     * @return {response}
     */
    async store({request, response}) {
        // Delcare validation rules
        const rules = {
            name: 'required|string|max:20',
            email: 'required|email|max:40',
            message: 'required|string|max:255'
        }

        const validation = await validateAll(request.all(), rules)
        // If the validation fails return a bad request with the errors
        if(validation.fails()) {
            response.status(400).send({
                error: validation.messages()
            });
        }
        else { // Otherwise insert the feedback
            const feedback = new Feedback();

            feedback.name = request.input('name');
            feedback.email = request.input('email');
            feedback.message = request.input('message');

            await feedback.save();

            await Mail.raw(feedback.message, (message) => {
              message.subject('Feedback')
              message.from('Me@me.com')
              message.to('franksideriojr@gmail.com')
            });

            response.status(201).send(feedback.name);
        }
    }
}

module.exports = FeedbackController
