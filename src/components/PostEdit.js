import React from 'react'
import { Edit, SimpleForm, TextInput, SelectInput, useRecordContext, } from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `- ${record.name} ( ${record.role} )` : ''}</span> ;
};

const PostEdit = (props) => {
  return (
    <Edit title={ <PostTitle/> } {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <SelectInput source="role" choices={[
            { id: 'admin', name: 'Admin' },
            { id: 'member', name: 'Member' },
        ]} />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit;