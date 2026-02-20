import { FinanceProvider } from "./context/FinanceContext";
import { TransactionForm } from "./components/TransactionForm";
import { TransactionList } from "./components/TransactionList";
import { InfoCards } from "./components/InfoCards";

export default function App() {
  return (
    <FinanceProvider>
      <div className="min-h-screen sm:h-screen bg-gray-100 p-4 md:p-8 flex flex-col">
        <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 shrink-0">
          Dashboard Financeiro
        </h1>
        <InfoCards />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 flex-1 min-h-0">          
          <div className="min-h-0">
            <TransactionForm />
          </div>
          <div className="min-h-0 flex flex-col">
            <TransactionList />
          </div>
        </div>
      </div>
    </FinanceProvider>
  );
}
