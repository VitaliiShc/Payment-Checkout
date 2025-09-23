const API_URL = window.location.origin + '/data/';

export async function getLocalCatrList() {
  const url = new URL('localCart.json', API_URL);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
