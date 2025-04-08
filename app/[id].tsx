import dayjs from 'dayjs';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';
import events from '~/assets/events.json';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <View className="flex-1 gap-3 bg-white p-3">
      <Stack.Screen
        options={{
          title: event.title,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}
      />
      <Image className="aspect-video w-full rounded-xl" source={{ uri: event.image }} />
      <Text className="text-3xl font-bold">{event.title}</Text>
      <Text className="text-lg font-semibold uppercase text-amber-800">
        {dayjs(event.datetime).format('ddd, D MMM')} · {dayjs(event.datetime).format('sh:mm A')}
      </Text>

      <Text className="text-lg">{event.description}</Text>
    </View>
  );
}
