// in src/users.tsx
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, Create, SimpleForm, ReferenceInput, TextInput } from "react-admin";
import MyUrlField from './MyUrlField';
import './usersrest.css';

export const Userrest = () => {
    return (
        <div className="dashboard-container">
          <div className="box">
            <h2>Box 1</h2>
            <UserrestList />
          </div>
          <div className="box">
            <h2>Box 2</h2>
            <p>This is the content of Box 2.</p>
          </div>
        </div>
      );
};

export const UserrestList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                />
            ) : (
              <Datagrid rowClick="show">
                    <TextField source="userId" />
                    <TextField source="name" />
                </Datagrid>
            )}
        </List>
    );
};

export const UserrestCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="userId"/>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
