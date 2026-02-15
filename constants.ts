
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { FAQItem, Metric, Product, JournalArticle } from './types';

export const BRAND_NAME = 'Smart';

export const LOGO_PRIMARY = 'https://www.dropbox.com/scl/fi/zbq04xjjipe6thm5hij3o/Artboard-11smartlogo.png?rlkey=4a4s413w0unr0yoc6t3bxukwx&st=8enp1u0o&dl=1';
export const LOGO_SECONDARY = 'https://www.dropbox.com/scl/fi/ak4uda75n2y7m0zjkvbjr/Artboard-1-copy-21smartlogo.png?rlkey=3utyrwtutxvnp997h26otv50m&st=ukprkdmh&dl=1';

export const TIMELINE_STEPS = [
  { id: 1, title: 'Contract', description: 'Transaction intelligence initiated.' },
  { id: 2, title: 'Search', description: 'SmartSearch AI exception detection.' },
  { id: 3, title: 'Clear to Close', description: 'Automated compliance verification.' },
  { id: 4, title: 'Funding', description: 'Real-time money event transparency.' },
  { id: 5, title: 'Recording', description: 'Structured county data submission.' },
  { id: 6, title: 'Post-Close', description: 'Lifecycle continuity via Smart One.' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What makes Smart different from other title companies?",
    answer: "Traditional title companies operate as isolated local offices. Smart operates as structured infrastructure, standardizing messy local data into usable, auditable intelligence designed to plug into the broader housing ecosystem."
  },
  {
    question: "Is Smart replacing humans with AI?",
    answer: "No. SmartSearch AI automates data retrieval and exception detection, allowing our human experts—who bring 20+ years of operational depth—to focus only on complex curative matters where judgment is paramount."
  },
  {
    question: "How do you prevent wire fraud and identity fraud?",
    answer: "Fraud prevention is architecture, not a feature. We monitor ownership filings, money patterns, and identity verification as a default transaction trust layer."
  },
  {
    question: "Can Smart integrate with our tools?",
    answer: "Yes. Smart is architected for interoperability. We provide APIs and structured data outputs for brokerages, lenders, and real estate portals to surface transparency to their clients."
  },
  {
    question: "What is Smart One?",
    answer: "Smart One is a post-close relationship platform. It provides document access, Title Shield monitoring, and home equity enablement, converting title from a one-time service into a lifecycle relationship."
  }
];

export const METRICS: Metric[] = [
  { label: "Manual Touches", value: "-65%", description: "Reduction in repetitive operational tasks." },
  { label: "Cycle Times", value: "-40%", description: "Faster closings through exception-based workflows." },
  { label: "Defect Rate", value: "0.01%", description: "Precision in AI-extracted title commitments." },
  { label: "Partner Retention", value: "95%", description: "Stronger loyalty through radical transparency." }
];

export const PRODUCTS: Product[] = [];
export const JOURNAL_ARTICLES: JournalArticle[] = [];
