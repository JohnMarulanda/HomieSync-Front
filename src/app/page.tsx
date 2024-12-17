import { Suspense } from 'react';
import { getTiendas } from '@/services/tiendasService'
import { TiendaCard } from '@/components/TiendaCard';

export default async function Home() {

  const tiendas = await getTiendas();

  return (
    <div className="min-h-screen p-8">
      <div className='w-full flex justify-between items-center'>
        <h1 className="text-4xl font-bold text-left">Hommiestock</h1>
        <h3>Grupo 3 - Bases de Datos NoSQL</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Suspense fallback={<div>Cargando tiendas...</div>}>
          {tiendas.map((tienda) => (
            <TiendaCard
              key={tienda.id}
              tienda={tienda}
              href={`/dashboard/${tienda.id}`} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
