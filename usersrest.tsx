// in src/users.tsx
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, Create, SimpleForm, ReferenceInput, TextInput } from "react-admin";
import MyUrlField from './MyUrlField';
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