import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { getTiendaById } from "@/services/tiendasService";
import { Sidebar } from '@/components/Sidebar';

interface TiendaPageProps {
  params: {
    id: string;
  };
}

export default async function DashboardPage({ params }: TiendaPageProps) {

  const tienda = await getTiendaById(params.id);

  console.log(`Params.id = ${params}`);

  if (!tienda) {
    notFound();
  }

  return (
    <div>
      <Sidebar tienda={tienda} />
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Productos Agotados</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-destructive">Requiere atención</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}