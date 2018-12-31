var FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

const { User } = require('../models');

module.exports = passport => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: [
          'id',
          'displayName',
          'email',
          'first_name',
          'middle_name',
          'last_name'
        ]
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('[+] /auth/facebook : profile = ', profile);

        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'facebook' }
          });
          if (exUser) {
            console.log(
              '[*] /auth/facebook/callback : existing user - ',
              exUser
            );
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile.email,
              name: profile.displayName,
              snsId: profile.id,
              provider: 'facebook'
            });
            console.log('[*] /auth/facebook/callback : newUser - ', newUser);
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};