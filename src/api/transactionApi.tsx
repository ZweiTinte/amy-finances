import { DropdownItem } from "../components/atoms/dropdown";

export async function postTransaction(
  resolvePost: () => void,
  transaction: Transaction
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  })
    .then(async (res) => {
      await res.json().then(resolvePost).catch();
    })
    .catch();
}

export async function deleteTransaction(
  resolveUpdate: () => void,
  transactionId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions/${transactionId}`, {
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

export async function fetchTransaction(
  resolveFetching: (data: Transaction) => void,
  handleError: (error: Error) => void,
  transactionId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions/${transactionId}`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function updateTransactions(
  resolveUpdate: () => void,
  transaction: Transaction
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions/${transaction.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function fetchTransactions(
  resolveFetching: (data: Transaction[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}
