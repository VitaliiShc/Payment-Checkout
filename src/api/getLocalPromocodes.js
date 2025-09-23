const API_URL = window.location.origin + '/data/';

export async function getLocalPromocodes() {
  const url = new URL('promocodes.json', API_URL);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
