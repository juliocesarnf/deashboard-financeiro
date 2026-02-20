import { useFinance } from "../context/FinanceContext";
import { Card } from "./Card";

export function InfoCards() {
  
  const { transactions } = useFinance();

  const income = transactions
    .filter( t => t.type === "receita" )
    .reduce( ( total, t ) => total + t.value, 0 );

  const expense = transactions
    .filter( t => t.type === "despesa" )
    .reduce( ( total, t ) => total + t.value, 0 );

  const balance = income - expense;

  return (
    <div className = "grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title = "Saldo" value = { balance } />
      <Card title = "Entradas" value = { income } />
      <Card title = "Saídas" value = { expense } />
    </div>
  );
  
}
