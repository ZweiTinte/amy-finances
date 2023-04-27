export async function fetchOrders(
  resolveFetching: (data: Order[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function fetchOrder(
  resolveFetching: (data: Order) => void,
  handleError: (error: Error) => void,
  id: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders/${id}`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function postOrder(
  resolvePost: () => void,
  order: Order
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: order.date,
      orderType: order.orderType,
      stock: order.stock,
      amount: order.amount,
      price: order.price,
      cost: order.cost,
      sum: order.sum,
      from: order.from,
      to: order.to,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolvePost).catch();
    })
    .catch();
}

export async function updateOrder(
  resolveUpdate: () => void,
  order: Order
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders/${order.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: order.date,
      orderType: order.orderType,
      stock: order.stock,
      amount: order.amount,
      price: order.price,
      cost: order.cost,
      sum: order.sum,
      from: order.from,
      to: order.to,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function deleteOrder(
  resolveUpdate: () => void,
  orderId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders/${orderId}`, {
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
