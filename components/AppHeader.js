import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Appbar } from 'react-native-paper';

export default function AppHeader({ title, navigation }) {
  const route = useRoute();
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);
   const [items, setItems] = useState([
     { label: 'Apple', value: 'apple' },
     { label: 'Banana', value: 'banana' },
   ]);

  return (
    <>
      <Appbar.Header>
        {route.name !== 'Home' && (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        )}
        <Appbar.Content title={title} />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </>
  );
}
