import { Datagrid, List, ReferenceField, TextField, NumberField, BooleanField } from "react-admin";

export const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <TextField source="description" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges"/>
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
};