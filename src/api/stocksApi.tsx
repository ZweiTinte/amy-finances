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
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch();
    })
    .catch();
}
