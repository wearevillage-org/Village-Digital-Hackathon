// Synthetic data only. Edit the JSON files in /data to add more items.
import content from '../data/content.json';
import members from '../data/members.json';
import sources from '../data/sources.json';
import type { ContentItem, Member, Source } from './types';

export const initialContent = content as ContentItem[];
export const allMembers = members as Member[];
export const allSources = sources as Source[];

export const memberName = (id: string | null) =>
  allMembers.find((m) => m.id === id)?.displayName ?? 'Unknown';
