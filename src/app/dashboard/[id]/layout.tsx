import { MainLayout } from '@/components/MainLayout';
import { getTiendaById } from '@/services/tiendasService';
import { notFound } from 'next/navigation';

interface TiendaLayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  }
}

export default async function TiendaLayout(props: TiendaLayoutProps) {
  const { params, children } = props;

  const tienda = await getTiendaById(params.id);
  console.log(`Tienda en layout = ${tienda._id}`);

  if (!tienda) {
    notFound();
  }

  return <MainLayout tienda={tienda}>{children}</MainLayout>;
}