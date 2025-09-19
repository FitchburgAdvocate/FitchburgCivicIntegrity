export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  excerpt: string;
  content: string;
};

export type Document = {
  id: string;
  title: string;
  date: string;
  category: string;
  url: string;
};

export type LegalAction = {
  id: string;
  title:string;
  summary: string;
  status: 'Ongoing' | 'Resolved' | 'Filed';
  filingDate: string;
  details: string;
};

export type ActionAlert = {
  id: string;
  title: string;
  date: string;
  content: string;
  severity: 'High' | 'Medium' | 'Low';
};
