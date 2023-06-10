export function getFromLocalStorage(key: string, alternative: any): any {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key) as string)
    : alternative;
}

export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
