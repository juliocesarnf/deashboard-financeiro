import { useFinance } from "../context/FinanceContext";
import { useState, useMemo } from "react";
import { ExportModal } from "./ExportModal";

type FilterType = "all" | "receita" | "despesa";

export function TransactionList() {

  const { transactions, removeTransaction } = useFinance();
  const [ search, setSearch ] = useState( "" );
  const [ filterType, setFilterType ] = useState< FilterType >( "all" );
  const [ open, setOpen ] = useState( false );

  const filteredTransactions = useMemo( () => {

    const searchTerm = search.toLowerCase().trim();
    return transactions.filter( transaction => {
      const matchesSearch =
        transaction.title.toLowerCase().includes( searchTerm ) ||
        transaction.category.toLowerCase().includes( searchTerm );
      const matchesType = filterType === "all" || transaction.type === filterType;
      return matchesSearch && matchesType;

    });
  }, [ transactions, search, filterType ] );

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col min-w-0 flex-1 min-h-0">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">
          Transações
        </h2>

        <button
          onClick = { () => setOpen( true ) }
          className = "bg-blue-600 text-white px-4 py-1 rounded-xl cursor-pointer"
        >
          Exportar
        </button>
      </div>

      <div className = "flex flex-col lg:flex-row gap-2 mb-4">
        <input
          type = "text"
          placeholder = "Pesquisar por título ou categoria..."
          value = { search }
          onChange = { e => setSearch( e.target.value ) }
          className = "flex-1 border p-2 rounded"
        />
        <div className = "flex flex-wrap sm:flex-nowrap bg-gray-100 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick = { () => setFilterType( "all" ) }
            className = {`flex-1 lg:flex-none px-4 py-2 text-sm transition-all duration-200 cursor-pointer
              ${ filterType === "all"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
              }`}
          >
            Todas
          </button>

          <button
            onClick = { () => setFilterType( "receita" ) }
            className = {`flex-1 lg:flex-none px-4 py-2 text-sm transition-all duration-200 cursor-pointer
              ${filterType === "receita"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-green-100 hover:text-green-700"
              }`}
          >
            Receitas
          </button>

          <button
            onClick = { () => setFilterType( "despesa" ) }
            className = { `flex-1 lg:flex-none px-4 py-2 text-sm transition-all duration-200 cursor-pointer
              ${filterType === "despesa"
                ? "bg-red-600 text-white"
                : "text-gray-600 hover:bg-red-100 hover:text-red-700"
              }`}
          >
            Despesas
          </button>


        </div>
      </div>

      <div className="overflow-auto flex-1 min-h-0">
        <table className="w-full min-w-150">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left border-b">
              <th>Título</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map( t => (
              <tr key = { t.id } className = "border-b">
                <td className = "max-w-45">
                  <div className="truncate" title = { t.title }>
                    { t.title }
                  </div>
                </td>

                <td>{ t.category }</td>
                <td>
                  { new Date( t.date ).toLocaleDateString( "pt-BR" ) }
                </td>
                <td
                  className = {
                    t.type === "receita"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  R$ { t.value.toFixed( 2 ) }
                </td>
                <td>
                  <button
                    onClick = { () => removeTransaction( t.id ) }
                    className = "text-red-500 hover:underline"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      { open && <ExportModal onClose = { () => setOpen( false ) } />}

    </div>
  );
}
