
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

// Added missing Product interface to resolve compilation errors
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  longDescription?: string;
  features: string[];
}

// Added missing JournalArticle interface to resolve compilation errors
export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'demo-request' };
