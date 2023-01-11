import { DropdownItem } from "./components/atoms/dropdown";

export async function fetchAccount(
  resolveFetching: (data: Account) => void,
  handleError: (error: Error) => void,
  accountId: string
): Promise<void> {
  await fetch(`http://localhost:3000/api/accounts/${accountId}`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function updateAccounts(
  resolveUpdate: () => void,
  accountId: string,
  account: Account | null,
  name: string
): Promise<void> {
  await fetch(`http://localhost:3000/api/accounts/${accountId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      iban: account?.iban,
      balance: account?.balance,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function fetchAccounts(
  resolveFetching: (data: Account[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch("http://localhost:3000/api/accounts")
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function deleteAccount(
  resolveUpdate: () => void,
  accountId: string
): Promise<void> {
  await fetch(`http://localhost:3000/api/accounts/${accountId}`, {
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

export const emptyAccountDDItem: DropdownItem = { id: 0, value: "Empty" };
