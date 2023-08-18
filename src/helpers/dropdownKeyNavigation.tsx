export function itemAction(e: React.KeyboardEvent<HTMLDivElement>) {
  const target = e.currentTarget as HTMLElement;
  const nextSibling = target?.nextSibling as HTMLElement;
  const previousSibling = target?.previousSibling as HTMLElement;
  if (target !== null) {
    if (e.key === "ArrowDown" && nextSibling !== null) {
      (nextSibling as HTMLDivElement)?.focus();
      setTimeout(() => {
        (nextSibling?.parentElement as HTMLDivElement).scrollTop += 8;
      }, 1);
    } else if (e.key === "ArrowUp" && previousSibling !== null) {
      const prevEl = previousSibling;
      (prevEl as HTMLElement).focus();
      setTimeout(() => {
        (prevEl?.parentElement as HTMLDivElement).scrollTop -= 8;
      }, 1);
    } else if (e.key === "ArrowUp" && previousSibling === null) {
      const prevEl = target.parentElement?.previousSibling;
      (prevEl as HTMLElement).focus();
      setTimeout(() => {
        if (prevEl instanceof HTMLInputElement) {
          const end = prevEl.value.length;
          prevEl.setSelectionRange(end, end);
        }
      }, 1);
    } else if (e.key === "Enter") {
      target.click();
    }
  }
}

export function inputKeyDownAction(e: React.KeyboardEvent<HTMLInputElement>) {
  const target = e.currentTarget as HTMLElement;
  const nextSibling = target?.nextSibling as HTMLElement;
  const firstChild = nextSibling?.firstChild as HTMLElement;
  if (
    e.key === "ArrowDown" &&
    target &&
    nextSibling !== null &&
    firstChild === null
  ) {
    (nextSibling as HTMLDivElement)?.focus();
  }
  if (e.key === "ArrowDown" && target && firstChild !== null) {
    (firstChild as HTMLDivElement)?.focus();
    const interval = setInterval(() => {
      (nextSibling as HTMLDivElement).scrollTop = 0;
    }, 1);
    setTimeout(() => {
      clearInterval(interval);
    }, 200);
  }
}
