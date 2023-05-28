export async function fetchCategories(
  resolveFetching: (data: Category[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}categories`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function postCategory(
  resolveFetching: () => void,
  name: string,
  type: number
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      type: type,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch();
    })
    .catch();
}

export async function deleteCategory(
  resolveUpdate: () => void,
  categoryId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}categories/${categoryId}`, {
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

export async function updateCategory(
  resolveUpdate: () => void,
  categoryId: string,
  name: string,
  type: number
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      type: type,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function fetchCategory(
  resolveFetching: (data: Category) => void,
  handleError: (error: Error) => void,
  categoryId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}categories/${categoryId}`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}
