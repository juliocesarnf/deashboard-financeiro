import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { type Transaction } from "../types/transaction";

export function exportToPDF( transactions: Transaction[] ) {

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text( "Relatório Financeiro", 14, 20 );

  const tableData = transactions.map( t => [
    t.title,
    t.category,
    t.type === "receita" ? "Entrada" : "Saída",
    `R$ ${ t.value.toFixed( 2 ) }`,
    new Date( t.date ).toLocaleDateString()
  ]);

  autoTable( doc, {
    startY: 30,
    head: [ [ "Título", "Categoria", "Tipo", "Valor", "Data" ] ],
    body: tableData,
  });

  doc.save( "finance-report.pdf" );

}
