import { Stack } from 'expo-router';



export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          title: 'Tab Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: 'Tab Profile',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: 'Tab Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registration"
        options={{
          title: 'Tab Registration',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
