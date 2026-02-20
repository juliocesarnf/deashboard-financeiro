export function Card( { title, value }: { title: string; value: number } ) {
  return (
    <div className = "bg-white p-4 rounded-2xl shadow-md">
      <h3 className = "text-gray-500 text-sm md:text-base">{ title }</h3>
      <p className = "text-2xl md:text-3xl font-bold">R$ { value.toFixed( 2 ) }</p>
    </div>
  );
}