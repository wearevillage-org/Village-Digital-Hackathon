import { StyleSheet, Text, View } from 'react-native';
import { useStore } from '../store';

// TODO (must): moderator screen. List items with status 'pending' or 'flagged',
// then call setStatus(id, 'approved' | 'rejected', reviewNote).
export function ReviewScreen() {
  const { items } = useStore();
  const toReview = items.filter((i) => i.status === 'pending' || i.status === 'flagged');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review queue</Text>
      <Text>{toReview.length} item(s) waiting. Your turn: build the review actions here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 20, fontWeight: '700' },
});
