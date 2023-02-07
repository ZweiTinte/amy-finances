export async function fetchStocks(
  resolveFetching: (data: Stock[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function postStock(
  resolveFetching: () => void,
  isin: string,
  name: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isin: isin,
      name: name,
      amount: 0,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch();
    })
    .catch();
}

export async function deleteStock(
  resolveUpdate: () => void,
  stockId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks/${stockId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function updateStock(
  resolveUpdate: () => void,
  stockId: string,
  isin: string,
  name: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stock/${stockId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isin: isin,
      name: name,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function fetchStock(
  resolveFetching: (data: Stock) => void,
  handleError: (error: Error) => void,
  stockId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks/${stockId}`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}
