import { CollectionConfig } from 'payload/types';
import { admins } from '../../access/admins';
import { adminsAndUser } from '../../access/adminsAndUser';
const passportCustom = require('passport-custom');
const CustomStrategy = passportCustom.Strategy;
// import payload from "payload";
// const m = payload.find()
// const Clerk = require("@clerk/clerk-sdk-node/cjs/instance").default;
// const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });
const pkg = require('@clerk/clerk-sdk-node');
const { clients, sessions, users } = pkg;
// const clerk = pkg.default;
// const { clients, sessions } = pkg;
const Cookies = require('cookies');
const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    forgotPassword: {
      generateEmailHTML: ({ token, user }) => {
        // Use the token provided to allow your user to reset their password
        // We will send them to the frontend NextJS app instead of sending
        // them to the Payload admin by default
        const resetPasswordURL = `${process.env.PAYLOAD_PUBLIC_NEXT_URL}/reset-password?token=${token}`;

        return `
          <!doctype html>
          <html>
            <body>
              <h1>Hi there</h1>
              <p>Click below to reset your password.</p>
              <p>
                <a href="${resetPasswordURL}">${resetPasswordURL}</a>
              </p>
            </body>
          </html>
        `;
      },
    },
    // auth: {
    // strategies: [
    //   {
    //     strategy: (payload) =>
    //       new CustomStrategy(async (req, done) => {
    //         try {
    //           // console.log("req", req);
    //           // Note: Clerk stores the clientToken in a cookie
    //           // named "__session" for Firebase compatibility
    //           console.log('start custom strategy');
    //           const sessionId = req.query._clerk_session_id;
    //           if (!sessionId) return done(null, false);

    //           // Note: Clerk stores the clientToken in a cookie
    //           // named "__session" for Firebase compatibility
    //           const cookies = new Cookies(req, payload.res);
    //           const sessionToken = cookies.get('__session');
    //           // console.log("session token", sessionToken);
    //           console.log('session_id', sessionId, 'session token', sessionToken);

    //           const sessionInfo = await sessions.verifySession(sessionId, sessionToken);
    //           console.log('session info', sessionInfo);
    //           console.log('user id', sessionInfo.userId);
    //           const res = await payload.find({
    //             collection: 'customers',
    //             where: {
    //               user_id: {
    //                 equals: sessionInfo.userId,
    //               },
    //             },
    //           });
    //           if (res.docs.length === 0) {
    //             const searchUser = await users.getUser(sessionInfo.userId);
    //             console.log('search user', searchUser);
    //             const emailAddress = searchUser.emailAddresses[0] ? searchUser.emailAddresses[0].emailAddress : '';
    //             const res = await payload.create({
    //               collection: 'customers',
    //               data: {
    //                 user_id: sessionInfo.userId,
    //                 email: emailAddress,
    //                 salt: '111',
    //                 password: '111',
    //               },
    //             });
    //             console.log('create res', res);
    //             res['collection'] = 'customers';
    //             res['_strategy'] = 'custom';
    //             done('', res);
    //             // done("", {
    //             //   _id: res._id,
    //             //   user_id: sessionInfo.userId,
    //             //   email: emailAddress,

    //             //   collection: "customers",
    //             //   _strategy: "custom",
    //             // });
    //           } else {
    //             const user = res.docs[0];
    //             user['collection'] = 'customers';
    //             user['_strategy'] = 'custom';
    //             done('', user);
    //             // done("", {
    //             //   _id: res.docs[0]._id,
    //             //   user_id: sessionInfo.userId,
    //             //   email: res.docs[0].email,
    //             //   collection: "customers",
    //             //   _strategy: "custom",
    //             // });
    //           }
    //         } catch (e) {
    //           console.error(e);
    //         }
    //       }),
    //     name: 'custom',
    //   },
    // ],
    // },
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Anyone can create a user
    create: () => true,

    // Users with role 'admin' can read and update all users
    // But users with role 'customer' can only read and update their own
    read: adminsAndUser,
    update: adminsAndUser,

    // Only admins can delete
    delete: admins,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      saveToJWT: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      saveToJWT: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      access: {
        // Only allow admins to update the roles of a user
        update: admins,
      },
      // Default role is 'customer'
      defaultValue: ['customer'],
      options: ['admin', 'customer'],
    },
  ],
};

export default Users;
