import { createContext, useContext, useState, type ReactNode } from 'react';
import { initialContent } from './data';
import type { ContentItem, Status } from './types';

// In-memory store: changes reset when you reload. Swap for AsyncStorage if you want persistence.
type Store = {
  items: ContentItem[];
  addItem: (item: ContentItem) => void;
  setStatus: (id: string, status: Status, reviewNote?: string | null) => void;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ContentItem[]>(initialContent);

  const addItem = (item: ContentItem) => setItems((prev) => [item, ...prev]);

  const setStatus = (id: string, status: Status, reviewNote: string | null = null) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              status,
              reviewNote,
              publishedAt:
                status === 'approved' ? (i.publishedAt ?? new Date().toISOString()) : i.publishedAt,
            }
          : i,
      ),
    );

  return (
    <StoreContext.Provider value={{ items, addItem, setStatus }}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useStore must be used inside <StoreProvider>');
  return store;
}
