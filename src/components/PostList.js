import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

// const postFilters = [
//     <TextInput source="q" label="Search" alwaysOn />,
//     <ReferenceInput source="name" label="Post" reference="posts">
//         <SelectInput optionText="name" />
//     </ReferenceInput>,
// ];
// const postFilters = [
//   <TextInput source="name email role" alwaysOn />,
//   <TextInput label="name" source="name" defaultValue="enter name" />,
//   <TextInput label="email" source="email" defaultValue="enter email" />,
//   <TextInput label="role" source="role" defaultValue="enter role" />,
// ];

const sort = { field: 'id', order: 'ASC' };

const PostList = () => {
  return (
      <List  >
        <Datagrid rowClick="edit" >
          <TextField source='id' />
          <TextField source='name' />
          <EmailField source='email' />
          <TextField source='role' />
          <EditButton basePath='/posts' />
          <DeleteButton basePath='/posts' />
        </Datagrid>
      </List>
  )
}

export default PostList;