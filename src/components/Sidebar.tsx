'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/utils';
import Button from '@/components/ui/button';
import { Package, ClipboardList, RotateCcw, Users, ShoppingCart, Home } from 'lucide-react';
import { Tienda } from '@/types/tienda';

interface SidebarProps {
  tienda: Tienda;
}

export function Sidebar({ tienda }: SidebarProps) {
  const pathname = usePathname();

  console.log(`Pathname = ${pathname}`);
  const baseUrl = `${tienda._id}`;

  const navItems = [
    {
      title: 'Dashboard',
      href: `/dashboard/${baseUrl}`,
      icon: Home
    },
    {
      title: 'Inventario',
      href: `/inventario/${baseUrl}`,
      icon: Package
    },
    {
      title: 'Pedidos',
      href: `/pedidos/${baseUrl}`,
      icon: ClipboardList
    },
    {
      title: 'Devoluciones',
      href: `/devoluciones/${baseUrl}`,
      icon: RotateCcw
    },
    {
      title: 'Clientes',
      href: `/clientes/${baseUrl}`,
      icon: Users
    },
    {
      title: 'Productos',
      href: `/productos/${baseUrl}`,
      icon: ShoppingCart
    }
  ];


  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-card">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-primary" />
          <Link href={`/`}>
            <div className="flex flex-col">
              <span className="text-xl font-bold">Hommiestock</span>
              <span className="text-sm text-muted-foreground">{tienda.nombre}</span>
            </div>
          </Link>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    className={cn(
                      "w-full flex justify-start items-center p-3 rounded-lg",
                      pathname === item.href && "bg-[--foreground] text-[--background]"
                    )}
                    onClick={() => console.log("Funciona")}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Link href="/">
          <Button
            className="w-full justify-start"
            onClick={() => console.log("Funciona")}
          >
            Cambiar tienda
          </Button>
        </Link>
      </div>
    </div>
  );
}

