'use client';

import { Tienda } from '@/types/tienda';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Building2, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';

interface TiendaCardProps {
  tienda: Tienda;
  href: string;
}

export function TiendaCard({ tienda, href }: TiendaCardProps) {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg transition-shadow w-full">
      <CardHeader>
        <div className="flex items-center space-x-2 w-full">
          <Building2 className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">
            {tienda.nombre}
          </h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Dirección</p>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{tienda.direccion}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full p-3 bg bg-[--foreground] text-[--background] rounded'
          onClick={() => router.push(href)} >
          Ir al comercio
        </Button>
      </CardFooter>
    </Card>
  );
}