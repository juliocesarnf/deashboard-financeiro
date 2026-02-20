import { createContext, useContext } from "react";
import { type Transaction } from "../types/transaction";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

interface FinanceContextData {
  transactions: Transaction[];
  addTransaction: (data: Omit<Transaction, "id">) => void;
  removeTransaction: (id: string) => void;
}

const FinanceContext = createContext( {} as FinanceContextData );

export function FinanceProvider( { children }: { children: React.ReactNode } ) {
  const [ transactions, setTransactions ] = useLocalStorage< Transaction[] > (
    "finance-data",
    []
  );

  function addTransaction( data: Omit<Transaction, "id"> ) {
    const newTransaction: Transaction = {
      ...data,
      id: uuidv4(),
    };

    setTransactions( prev => [ ...prev, newTransaction ] );
  }

  function removeTransaction( id: string ) {
    setTransactions( prev => prev.filter( t => t.id !== id ) );
  }

  return (
    <FinanceContext.Provider
      value = { { transactions, addTransaction, removeTransaction } }
    >
      { children }
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  return useContext( FinanceContext );
}
