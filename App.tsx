import { Admin, Resource, ShowGuesser, CustomRoutes, combineDataProviders  } from "react-admin";

import UserIcon from '@mui/icons-material/Group';
import { Route } from 'react-router';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { UserrestList, UserrestCreate } from "./usersrest";
import { Dashboard } from './Dashboard';

import Segments from './segments/Segments';

import  Settings from './Settings';
import { MyLayout } from './MyLayout';

import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider1 = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider2 = simpleRestProvider('http://localhost:8080');

const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
        case 'posts':
        case 'users':
            return dataProvider1;
        case 'usersrest':
            return dataProvider2;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
});

export const App = () => 
  <Admin dataProvider={dataProvider} dashboard={Dashboard} layout={MyLayout}> {/* Layout 추가 */}
  
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
<p className="title">MAIN</p>
<Resource
            name="usersrest"
            list={UserrestList}
            show={ShowGuesser}
            create={UserrestCreate}
            recordRepresentation="name"
            icon={UserIcon}
        />
<Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
<CustomRoutes>
      <Route path="/settings" element={<Settings />} />
  </CustomRoutes>
</Admin>;
