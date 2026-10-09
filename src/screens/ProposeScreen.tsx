import { StyleSheet, Text, View } from 'react-native';
import { useStore } from '../store';

// TODO (must): a form for members to propose an article or photo.
// Hint: build a ContentItem with status 'pending' and call addItem(...).
// Sources with requiresReview (see data/sources.json) must go through moderation.
export function ProposeScreen() {
  const { addItem } = useStore();
  void addItem;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Propose content</Text>
      <Text>Your turn: build the submission form here (src/screens/ProposeScreen.tsx).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 20, fontWeight: '700' },
});
