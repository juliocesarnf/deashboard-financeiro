import { type Transaction } from "../types/transaction";

export function exportToCSV( transactions: Transaction[] ) {
  
  const headers = [
    "Título",
    "Categoria",
    "Tipo",
    "Valor",
    "Data"
  ];

  const rows = transactions.map( t => [
    t.title,
    t.category,
    t.type,
    t.value,
    new Date( t.date ).toLocaleDateString()
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [ headers, ...rows ]
      .map( e => e.join( "," ) )
      .join( "\n" );

  const encodedUri = encodeURI( csvContent );

  const link = document.createElement( "a" );
  link.setAttribute( "href", encodedUri );
  link.setAttribute( "download", "finance-report.csv" );
  document.body.appendChild( link );

  link.click();
  document.body.removeChild( link );

}
