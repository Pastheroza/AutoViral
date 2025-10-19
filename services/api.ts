// API service for AutoViral endpoints

const API_URL = 'https://viral.biaz.hurated.com';

export interface TrendsQuery {
  status?: 'discovering' | 'selected' | 'blocked' | 'stopped';
  source?: 'instagram' | 'x' | 'reddit';
  since?: string; // '1h', '30m', '2d', '7d'
  limit?: number;
}

export class AutoViralAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl;
  }

  // Health check
  async health() {
    const response = await fetch(`${this.baseUrl}/health`);
    if (!response.ok) throw new Error('Health check failed');
    return response.json();
  }

  // Get trends with filtering
  async getTrends(query: TrendsQuery = {}) {
    const params = new URLSearchParams();
    
    if (query.status) params.append('status', query.status);
    if (query.source) params.append('source', query.source);
    if (query.since) params.append('since', query.since);
    if (query.limit) params.append('limit', query.limit.toString());

    const url = `${this.baseUrl}/trends${params.toString() ? '?' + params.toString() : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) throw new Error('Failed to fetch trends');
    return response.json();
  }

  // Get single trend by ID
  async getTrend(id: string) {
    const response = await fetch(`${this.baseUrl}/trends/${id}`);
    if (!response.ok) {
      if (response.status === 404) throw new Error('Trend not found');
      throw new Error('Failed to fetch trend');
    }
    return response.json();
  }

  // Stop trend by ID
  async stopTrend(id: string) {
    const response = await fetch(`${this.baseUrl}/stop/trend/${id}`, {
      method: 'POST'
    });
    if (!response.ok) throw new Error('Failed to stop trend');
    return response.json();
  }

  // Stop trends by keyword
  async stopKeyword(keyword: string) {
    const response = await fetch(`${this.baseUrl}/stop/keyword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ keyword })
    });
    if (!response.ok) throw new Error('Failed to stop keyword');
    return response.json();
  }

  // Report new trend (webhook - internal use)
  async reportTrend(trendData: any) {
    const response = await fetch(`${this.baseUrl}/webhook/trend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trendData)
    });
    if (!response.ok) throw new Error('Failed to report trend');
    return response.json();
  }
}

export const api = new AutoViralAPI();
