import { DropdownItem } from "./components/atoms/dropdown";

export async function postTransaction(
  resolvePost: () => void,
  date: string,
  name: string,
  category: DropdownItem,
  amount: string,
  from: DropdownItem,
  to: DropdownItem
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: date,
      name: name,
      category: category.value,
      amount: parseFloat(amount),
      from: from.id,
      to: to.id,
    }),
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
  transactionId: string,
  date: string,
  name: string,
  category: DropdownItem,
  amount: string,
  from: DropdownItem,
  to: DropdownItem
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}transactions/${transactionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: date,
      name: name,
      category: category.value,
      amount: parseFloat(amount),
      from: from.id,
      to: to.id,
    }),
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
