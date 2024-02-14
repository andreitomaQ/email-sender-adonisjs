/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import mail from "@adonisjs/mail/services/main";

router.on('/').render('pages/home')
router.get('/email', async () => {
  await mail.send((message) => {
    message
      .to('test123456782@yahoo.com')
      // .to('andrei.toma@qualitance.com')
      .subject('Verify your email address')
      .htmlView('emails/verify_email_html', {})
  })
  return 'Hello world from the home page.'
})
