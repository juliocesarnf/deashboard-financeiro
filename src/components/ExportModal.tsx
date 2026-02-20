import { exportToCSV } from "../utils/exportCSV";
import { exportToPDF } from "../utils/exportPDF";
import { useFinance } from "../context/FinanceContext";

interface Props {
  onClose: () => void;
}

export function ExportModal( { onClose }: Props ) {
  const { transactions } = useFinance();

  return (
    <div className = "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className = "bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-sm">
        <h2 className =" text-xl font-bold mb-4">Exportar Relatório</h2>

        <div className = "flex flex-col gap-3">
          <button
            onClick = { () => {
              exportToCSV( transactions ) ;
              onClose();
            }}
            className = "bg-green-600 hover:bg-green-300 text-white py-2 rounded-xl cursor-pointer"
          >
            Exportar como CSV
          </button>

          <button
            onClick = { () => { 
              exportToPDF( transactions );
              onClose();
            }}
            className="bg-red-600 hover:bg-red-300 text-white py-2 rounded-xl cursor-pointer"
          >
            Exportar como PDF
          </button>
        </div>

        <button
          onClick = { onClose }
          className = "mt-4 text-gray-500 w-full cursor-pointer"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
