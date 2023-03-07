import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Pages from './collections/Pages';
import { seedHomepage } from './collections/Pages/seed';
import { seedUsers } from './collections/Users/seed';
import BeforeLogin from './components/BeforeLogin';
import Articles from './collections/Articles';
import Customers from './collections/Customers';

export default buildConfig({
  admin: {
    components: {
      beforeLogin: [BeforeLogin],
    },
  },
  cors: [process.env.PAYLOAD_PUBLIC_NEXT_URL],
  collections: [Pages, Users, Articles, Customers],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  onInit: async (payload) => {
    await seedHomepage(payload);
    await seedUsers(payload);
  },
});
