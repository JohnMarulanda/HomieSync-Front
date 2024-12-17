import { Sidebar } from './Sidebar';
import { Tienda } from '@/types/tienda';

interface MainLayoutProps {
  children: React.ReactNode;
  tienda: Tienda;
}

export function MainLayout({ children, tienda }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar tienda={tienda} />
      <main className="pl-64">
        <div className="container mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}