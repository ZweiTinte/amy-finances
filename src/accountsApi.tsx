export async function fetchAccount(
  resolveFetching: (data: Account) => void,
  handleError: (error: Error) => void,
  accountId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}accounts/${accountId}`)
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
  await fetch(`${process.env.GATSBY_API_URL}accounts/${accountId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      iban: account?.iban,
      balance: account?.balance,
      accountType: account?.accountType,
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
  console.log(`${process.env.GATSBY_API_URL}accounts`);
  await fetch(`${process.env.GATSBY_API_URL}accounts`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function deleteAccount(
  resolveUpdate: () => void,
  accountId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}accounts/${accountId}`, {
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

export async function postAccount(
  resolveFetching: () => void,
  iban: string,
  name: string,
  balance: string,
  accountType: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iban: iban,
      name: name,
      balance: parseFloat(balance),
      accountType: accountType,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch();
    })
    .catch();
}
