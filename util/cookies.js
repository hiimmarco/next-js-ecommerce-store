import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  if (typeof window !== 'undefined') {
    Cookies.set(key, JSON.stringify(key, value));
  }
}
