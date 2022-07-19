export function setCookie(key, value, expireDays) {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  document.cookie =
    key + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

export function getCookie(key) {
  let find = document.cookie
    .split("; ")
    .find((row) => row.startsWith(key + "="));
  if (find) find = find.split("=")[1];
  return find;
}

export function deleteCookie(key) {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  document.cookie = key + "=;expires=" + d.toUTCString() + ";path=/";
}

export function checkCookie(key) {
  const cookie = getCookie(key);
  if (cookie) return true;
  return false;
}
