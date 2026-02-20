import { useState } from "react";
import { useFinance } from "../context/FinanceContext";

const categories = [
  "Moradia",
  "Alimentação",
  "Transporte",
  "Saúde",
  "Conta",
  "Entretenimento",
  "Lazer",
  "Trabalho",
  "Investimento",
  "Dívida"
];

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

export function TransactionForm() {
  const { addTransaction } = useFinance();

  const [ title, setTitle ] = useState( "" );
  const [ value, setValue ] = useState( 1 );
  const [ type, setType ] = useState< "receita" | "despesa" >( "despesa" );
  const [ category, setCategory ] = useState( categories[0] );
  const [ date, setDate ] = useState( getTodayDate() );


  function handleSubmit( e: React.SubmitEvent<HTMLFormElement> ) {

    e.preventDefault();

    if( !title.trim() ) {
      alert( "O título não pode estar vazio." );
      return;
    }

    if(!category) {
      alert( "Selecione uma categoria." );
      return;
    }

    if(value < 1) {
      alert( "O valor deve ser maior que 1." );
      return;
    }

    addTransaction({
      title,
      value,
      type,
      category,
      date
    });

    setTitle( "" );
    setValue( 1 );
    setCategory( categories[0] );
    setDate( getTodayDate() )

  }

  return(
    <form
      onSubmit = { handleSubmit }
      className = "bg-white p-4 rounded-2xl shadow-md space-y-4"
    >
      <input
        className = "w-full border p-2 rounded"
        placeholder = "Título"
        value = { title }
        onChange = { e => setTitle( e.target.value ) }
      />

      <input
        type = "number"
        className = "w-full border p-2 rounded"
        placeholder = "Valor"
        onChange = { e => setValue( Number( e.target.value ) ) }
        value = { value }
      />

      <div className="flex gap-2">
        <label className="flex-1 cursor-pointer">
          <input
            type = "radio"
            name = "type"
            value = "receita"
            checked = { type === "receita" }
            onChange = { () => setType( "receita" ) }
            className = "sr-only"
          />
          <div
            className = { `text-center py-2 rounded-lg border transition-all
              ${
                type === "receita"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-green-50"
              }`}
          >
            Entrada
          </div>
        </label>

        <label className="flex-1 cursor-pointer">
          <input
            type = "radio"
            name = "type"
            value = "despesa"
            checked = { type === "despesa" }
            onChange  ={ () => setType( "despesa" ) }
            className = "sr-only"
          />
          <div
            className = { `text-center py-2 rounded-lg border transition-all
              ${
                type === "despesa"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-red-50"
              }`}
          >
            Saída
          </div>
        </label>
      </div>

      <select
        className="w-full border p-2 rounded"
        value = { category }
        onChange = { e => setCategory( e.target.value ) }
      >
        { categories.map( cat => (
          <option key={ cat } value={ cat }>
            { cat }
          </option>
        ))}
      </select>
      <input
        type = "date"
        className = "w-full border p-2 rounded"
        value = { date }
        onChange = { e => setDate( e.target.value ) }
      />

      <button className = "bg-blue-600 text-white px-4 py-2 rounded-xl w-full">
        Adicionar
      </button>
    </form>
  );
}
