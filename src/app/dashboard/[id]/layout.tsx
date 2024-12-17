import { MainLayout } from '@/components/MainLayout';
import { getTiendaById } from '@/services/tiendasService';
import { notFound } from 'next/navigation';

export default async function TiendaLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const tienda = await getTiendaById((await params).id);

  if (!tienda) {
    notFound();
  }

  return <MainLayout tienda={tienda}>{children}</MainLayout>;
}