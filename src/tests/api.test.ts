import { describe, it, expect } from 'vitest';
import { getAPIKey } from '../api/auth';

describe('getAPIKey', () => {
  it('returns API key if header is valid', () => {
    expect(getAPIKey({ authorization: 'ApiKey abc123' })).toBe('abc123');
  });

  it('returns null if header is missing or invalid', () => {
    expect(getAPIKey({})).toBeNull();
    expect(getAPIKey({ authorization: 'Bearer abc123' })).toBeNull();
    expect(getAPIKey({ authorization: 'ApiKey' })).toBeNull();
  });
});
