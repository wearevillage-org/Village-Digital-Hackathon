import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LibraryScreen } from './src/screens/LibraryScreen';
import { ProposeScreen } from './src/screens/ProposeScreen';
import { ReviewScreen } from './src/screens/ReviewScreen';
import { StoreProvider } from './src/store';

const TABS = {
  Library: LibraryScreen,
  Propose: ProposeScreen,
  Review: ReviewScreen,
} as const;
type Tab = keyof typeof TABS;

export default function App() {
  const [tab, setTab] = useState<Tab>('Library');
  const Screen = TABS[tab];

  return (
    <StoreProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Village content space</Text>
          <Text style={styles.headerNote}>Prototype · synthetic data only</Text>
        </View>
        <View style={styles.body}>
          <Screen />
        </View>
        <View style={styles.tabBar}>
          {(Object.keys(TABS) as Tab[]).map((t) => (
            <Pressable
              key={t}
              accessibilityRole="tab"
              accessibilityState={{ selected: tab === t }}
              onPress={() => setTab(t)}
              style={styles.tab}
            >
              <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>{t}</Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f6f4fb' },
  header: { padding: 16, paddingBottom: 8 },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#4b2e83' },
  headerNote: { fontSize: 12, color: '#555' },
  body: { flex: 1 },
  tabBar: { flexDirection: 'row', borderTopWidth: 1, borderColor: '#ddd', backgroundColor: '#fff' },
  tab: { flex: 1, padding: 14, alignItems: 'center' },
  tabText: { color: '#555', fontWeight: '600' },
  tabTextActive: { color: '#4b2e83' },
});
