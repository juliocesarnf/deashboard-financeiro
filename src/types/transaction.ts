export type TransactionType = "receita" | "despesa";

export interface Transaction {
  id: string;
  title: string;
  value: number;
  type: TransactionType;
  category: string;
  date: string;
}
