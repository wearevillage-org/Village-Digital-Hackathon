export type SourceId = 'village' | 'community' | 'external';
export type Status = 'pending' | 'approved' | 'rejected' | 'flagged';

export type Member = {
  id: string;
  handle: string;
  displayName: string;
  role: 'contributor' | 'trusted_contributor' | 'moderator' | 'admin';
};

export type Source = {
  id: SourceId;
  label: string;
  tagline: string;
  requiresReview: boolean;
  note?: string;
};

export type ContentItem = {
  id: string;
  type: 'article' | 'photo';
  source: SourceId;
  authorId: string | null;
  title: string;
  subtitle: string;
  category: string;
  body: string | null;
  image: string | null;
  imageAlt: string | null;
  status: Status;
  reviewNote: string | null;
  reportCount: number;
  submittedAt: string;
  publishedAt: string | null;
  externalName?: string;
  externalUrl?: string | null;
};
