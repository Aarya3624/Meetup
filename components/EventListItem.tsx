import Feather from '@expo/vector-icons/Feather';
import { Image, Text, View } from 'react-native';

export default function EventListItem({ event }: any) {
  return (
    <View className="gap-3 p-3">
      <View className="flex-row">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-800">
            Wed 13, Sept · 19:30 CEST
          </Text>
          <Text className="text-xl font-bold" numberOfLines={2}>
            {event.title}
          </Text>
          <Text className="text-gray-700">{event.location}</Text>
        </View>

        {/* Event Image */}
        <Image className="aspect-video w-2/5 rounded-xl" source={{ uri: event.image }} />
      </View>

      {/* Footer */}
      <View className="flex-row gap-3">
        <Text className="mr-auto text-gray-700">16 going</Text>
        <Feather name="share" size={24} color="gray" />
        <Feather name="bookmark" size={24} color="gray" />
      </View>
    </View>
  );
}
