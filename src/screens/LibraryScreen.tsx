import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ContentCard } from '../components/ContentCard';
import { allSources } from '../data';
import { useStore } from '../store';
import type { SourceId } from '../types';

// Working example: one library, filtered by source. Only approved items are shown.
export function LibraryScreen() {
  const { items } = useStore();
  const [source, setSource] = useState<SourceId | 'all'>('all');

  const visible = items.filter(
    (i) => i.status === 'approved' && (source === 'all' || i.source === source),
  );

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        {[{ id: 'all', label: 'All' }, ...allSources].map((s) => (
          <Pressable
            key={s.id}
            accessibilityRole="button"
            accessibilityLabel={`Show ${s.label}`}
            onPress={() => setSource(s.id as SourceId | 'all')}
            style={[styles.chip, source === s.id && styles.chipActive]}
          >
            <Text style={[styles.chipText, source === s.id && styles.chipTextActive]}>
              {s.label}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={visible}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <ContentCard item={item} />}
        ListEmptyComponent={<Text>Nothing here yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  filters: { flexDirection: 'row', gap: 8, marginBottom: 12, flexWrap: 'wrap' },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#e7e2f3' },
  chipActive: { backgroundColor: '#4b2e83' },
  chipText: { color: '#4b2e83', fontWeight: '600' },
  chipTextActive: { color: '#fff' },
});
