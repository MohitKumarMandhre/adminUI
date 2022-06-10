
import * as React from "react";
import { List, 
	Datagrid, 
	ReferenceInput, 
	SelectInput, 
	TextField, 
	EmailField, 
	DeleteButton, 
	EditButton,
	TextInput,
} from 'react-admin';
import PostPagination from "./pagination";


const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Name" reference="posts">
        <SelectInput optionText="name" label="Name" />
    </ReferenceInput>,
];


export const UserList = () => (
    <List 
    	pagination={<PostPagination />}
    	filters={postFilters} 
    	title="List of Users" 
        debounce={1000}
    	>
        <Datagrid
            optimized
            rowClick="edit" 
            sort={{ field:'id', order: 'ASC' }}
            size="small"
            sx={{
            '& .RaDatagrid-headerCell': {
                fontWeight: "bold",
                backgroundColor: "lightgrey",
                fontSize: "18px"
            },
            
        }}
            >
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="role" />
            <EditButton basePath='/posts'  sx={{ fontWeight: "bold" }} />
            <DeleteButton basePath='/posts'  sx={{ fontWeight: "bold" }} />
        </Datagrid>
    </List>
);