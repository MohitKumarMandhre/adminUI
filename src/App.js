import { Admin, Resource} from 'react-admin';
import PostCreate from './components/PostCreate';
import PostEdit from "./components/PostEdit";
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./components/userList";
import PostIcon from '@mui/icons-material/Book';
import { defaultTheme } from "react-admin";

const dataProvider = jsonServerProvider('http://localhost:5000');
console.log( dataProvider);

function App() {
  return (
    <Admin dataProvider={ dataProvider } theme={ defaultTheme }>
      <Resource 
        icon={ PostIcon }
        name ="posts" 
        list={UserList}
        create={PostCreate}
        edit={PostEdit}
        />
    </Admin>
  );
}

export default App;
