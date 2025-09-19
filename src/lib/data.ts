import type { BlogPost, Document, LegalAction, ActionAlert } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'navigating-the-new-zoning-proposals',
    title: 'Navigating the New Zoning Proposals',
    author: 'David M. Haight',
    date: '2024-07-15',
    imageUrl: '1',
    imageHint: 'city map',
    excerpt: 'The recent zoning proposals by the city council could have a significant impact on our neighborhoods. Here’s what you need to know...',
    content: `
<p>The recent zoning proposals by the city council could have a significant impact on our neighborhoods. It's crucial for every resident of Fitchburg to understand the potential changes and what they mean for the future of our city. In this post, we'll break down the key points of the proposal, analyze the potential environmental and community impacts, and outline how you can make your voice heard.</p>
<p>One of the primary concerns is the rezoning of several areas near vital wetlands. These changes could pave the way for development that threatens local water quality and wildlife habitats. We will explore the specific parcels in question and discuss the protections currently in place under the Clean Water Act.</p>
<h2>Key Changes to Watch</h2>
<ul>
  <li><strong>Residential Density Increases:</strong> The proposal calls for higher density allowances in several single-family home neighborhoods.</li>
  <li><strong>Commercial Rezoning near Wetlands:</strong> Certain protected areas are being considered for commercial development, which raises significant environmental flags.</li>
  <li><strong>Reduced Setbacks:</strong> The distance required between new construction and property lines, including those adjacent to streams, may be reduced.</li>
</ul>
<p>We encourage all citizens to review the official documents, attend the upcoming public hearings, and contact their city representatives. Your engagement is vital to ensuring responsible development in Fitchburg.</p>
    `,
  },
  {
    id: '2',
    slug: 'understanding-our-groundwater',
    title: 'A Deep Dive into Fitchburg\'s Groundwater',
    author: 'Fitchburg Civic Integrity',
    date: '2024-06-28',
    imageUrl: '2',
    imageHint: 'water stream',
    excerpt: 'Our city\'s groundwater is a precious resource, but it\'s facing increasing threats. Learn more about the challenges and solutions...',
    content: `
<p>Our city's groundwater is a precious resource, but it's facing increasing threats from pollution and over-extraction. This article provides an overview of the hydrogeology of the Fitchburg area and discusses the primary sources of contamination that are impacting our wells and streams.</p>
<h2>Sources of Contamination</h2>
<p>Runoff from industrial sites, agricultural chemicals, and failing septic systems are major contributors to groundwater pollution. We will look at recent water quality reports and identify the key contaminants of concern, such as nitrates and volatile organic compounds (VOCs).</p>
<p>Fitchburg Civic Integrity is advocating for stronger local ordinances to protect our groundwater resources. This includes promoting sustainable land use practices, investing in modern water treatment infrastructure, and holding polluters accountable.</p>
`,
  },
];

export const documents: Document[] = [
    { id: 'doc-1', title: 'City Council Meeting Agenda - July 2024', date: '2024-07-01', category: 'Agenda', url: '#' },
    { id: 'doc-2', title: 'Planning Board Meeting Minutes - June 2024', date: '2024-06-20', category: 'Minutes', url: '#' },
    { id: 'doc-3', title: 'Proposed Zoning Ordinance 2024-05', date: '2024-05-15', category: 'Ordinance', url: '#' },
    { id: 'doc-4', title: 'Environmental Impact Report: Quabbin Development', date: '2024-04-30', category: 'Report', url: '#' },
    { id: 'doc-5', title: 'City Budget Fiscal Year 2025', date: '2024-04-01', category: 'Budget', url: '#' },
    { id: 'doc-6', title: 'Conservation Commission Public Hearing Notice', date: '2024-07-10', category: 'Notice', url: '#' },
];

export const legalActions: LegalAction[] = [
  {
    id: 'la-1',
    title: 'FCI v. City of Fitchburg re: Wetland Protection Act Violations',
    summary: 'Lawsuit filed against the city for approving development projects that violate state wetland protection laws.',
    status: 'Ongoing',
    filingDate: '2024-05-10',
    details: 'This action contends that the Fitchburg Conservation Commission failed to properly enforce the Massachusetts Wetlands Protection Act by allowing construction within a critical buffer zone of a local stream. The suit seeks to halt construction and require a full environmental review.'
  },
  {
    id: 'la-2',
    title: 'Public Records Request Appeal for Water Quality Data',
    summary: 'Appeal filed after the city denied a public records request for comprehensive water quality testing data.',
    status: 'Filed',
    filingDate: '2024-07-02',
    details: 'David M. Haight filed an appeal with the Secretary of the Commonwealth\'s Public Records Division. The city initially claimed the records were exempt, citing deliberative process. We argue this data is public and essential for transparency.'
  }
];

export const actionAlerts: ActionAlert[] = [
  {
    id: 'aa-1',
    title: 'URGENT: Attend City Council Meeting on Zoning',
    date: '2024-07-22',
    content: 'A critical vote on the new zoning proposals is scheduled for the July 25th City Council meeting. Public comment is crucial. Please attend to voice your concerns about protecting our wetlands and water resources.',
    severity: 'High',
  },
  {
    id: 'aa-2',
    title: 'Contact the Planning Board',
    date: '2024-07-18',
    content: 'The Planning Board is reviewing the "Shady Grove" subdivision plan, which lacks adequate stormwater management. Email the board to demand a more robust plan to protect downstream water quality.',
    severity: 'Medium',
  },
  {
    id: 'aa-3',
    title: 'Thank You for Your Support',
    date: '2024-06-30',
    content: 'Thanks to public pressure, the proposal to reduce stream setbacks has been temporarily tabled. Stay vigilant as it may return.',
    severity: 'Low',
  }
];
