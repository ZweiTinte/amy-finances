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
