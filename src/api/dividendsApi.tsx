export async function fetchDividends(
  resolveFetching: (data: Dividend[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}dividends`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function postDividend(
  resolveFetching: () => void,
  payDate: string,
  exDate: string,
  amountBeforeTax: number,
  taxAmount: number,
  stock: number,
  toAccount: number
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}dividends`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payDate: payDate,
      exDate: exDate,
      amountBeforeTax: amountBeforeTax,
      taxAmount: taxAmount,
      stock: stock,
      toAccount: toAccount,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch();
    })
    .catch();
}

export async function deleteDividend(
  resolveUpdate: () => void,
  dividendId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}dividends/${dividendId}`, {
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

export async function updateDividend(
  resolveUpdate: () => void,
  dividendId: string,
  payDate: string,
  exDate: string,
  amountBeforeTax: number,
  taxAmount: number,
  stock: number,
  toAccount: number
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}dividends/${dividendId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payDate: payDate,
      exDate: exDate,
      amountBeforeTax: amountBeforeTax,
      taxAmount: taxAmount,
      stock: stock,
      toAccount: toAccount,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function fetchDividend(
  resolveFetching: (data: Dividend) => void,
  handleError: (error: Error) => void,
  dividendId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}dividends/${dividendId}`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}
