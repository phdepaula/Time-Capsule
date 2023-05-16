import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="text-2xl font-bold uppercase">
      <Text>Hello World</Text>
      <StatusBar />
    </View>
  )
}
