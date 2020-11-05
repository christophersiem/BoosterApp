import { getJWTToken } from './jwt-utils';

export async function fetchUserNumbers() {
  const token = getJWTToken();
  const response = await fetch(`/api/data`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error(`failed to fetch ID: ${response.statusText}`);
  }
  return await response.json();
}
