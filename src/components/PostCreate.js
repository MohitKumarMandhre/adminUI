import React from 'react'
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <SelectInput source="role" choices={[
            { id: 'admin', name: 'Admin' },
            { id: 'member', name: 'Member' },
        ]} />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate