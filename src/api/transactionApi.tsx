import axios from "axios";
import { resolveTransactionFetching } from "../helpers/transactionsHelper";
import { DropdownItem } from "../dropdownTypes";

export function postTransaction(
  resolvePost: () => void,
  transaction: Transaction
): void {
  axios
    .post(`${process.env.GATSBY_API_URL}transactions`, transaction)
    .then(() => {
      resolvePost();
    })
    .catch();
}

export function deleteTransaction(
  resolveUpdate: () => void,
  transactionId: string
): void {
  axios
    .delete(`${process.env.GATSBY_API_URL}transactions/${transactionId}`)
    .then(() => {
      resolveUpdate();
    })
    .catch();
}

export function fetchTransaction(
  accounts: DropdownItem[],
  setName: (name: string) => void,
  setDate: (date: string) => void,
  setTransactionType: (transactionType: DropdownItem) => void,
  setCategory: (category: DropdownItem) => void,
  setAmount: (amount: string) => void,
  setFrom: (account: DropdownItem) => void,
  setTo: (account: DropdownItem) => void,
  setRecurringEnd: (end: string) => void,
  setRecurringGap: (gap: string) => void,
  setRecurringPeriod: (period: DropdownItem) => void,
  setTransactionReady: (ready: boolean) => void,
  setError: (error: boolean) => void,
  setErrorMessage: (message: string) => void,
  transactionId: string,
  categories: DropdownItem[]
): void {
  axios
    .get(`${process.env.GATSBY_API_URL}transactions/${transactionId}`)
    .then((res) => {
      resolveTransactionFetching(
        res.data,
        accounts,
        setName,
        setDate,
        setTransactionType,
        setCategory,
        setAmount,
        setFrom,
        setTo,
        setRecurringEnd,
        setRecurringGap,
        setRecurringPeriod,
        setTransactionReady,
        categories
      );
    })
    .catch((error: Error) => {
      setError(true);
      setErrorMessage(error.message);
    });
}

export function updateTransactions(
  resolveUpdate: () => void,
  transaction: Transaction
): void {
  axios
    .put(
      `${process.env.GATSBY_API_URL}transactions/${transaction.id}`,
      transaction
    )
    .then(() => {
      resolveUpdate();
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
