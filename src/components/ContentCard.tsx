import { Image, StyleSheet, Text, View } from 'react-native';
import { memberName } from '../data';
import type { ContentItem } from '../types';

export function ContentCard({ item }: { item: ContentItem }) {
  const credit = item.source === 'external' ? item.externalName : memberName(item.authorId);
  return (
    <View style={styles.card}>
      {item.image && (
        <Image
          source={{ uri: item.image }}
          accessibilityLabel={item.imageAlt ?? item.title}
          style={styles.image}
        />
      )}
      <Text style={styles.meta}>
        {item.source.toUpperCase()} · {item.category}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      {item.body && <Text style={styles.body}>{item.body}</Text>}
      <Text style={styles.credit}>By {credit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, gap: 6 },
  image: { width: '100%', height: 180, borderRadius: 8, backgroundColor: '#eee' },
  meta: { fontSize: 12, color: '#6b5b95', fontWeight: '600' },
  title: { fontSize: 18, fontWeight: '700', color: '#1a1a1a' },
  subtitle: { fontSize: 14, color: '#444' },
  body: { fontSize: 14, color: '#222' },
  credit: { fontSize: 12, color: '#555', marginTop: 4 },
});
