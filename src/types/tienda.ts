export interface Tienda {
  _id: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  codPostal: number;
  capacidadAlmacenamiento: number;
  horarioOperacion: {
    horarioEntrada: string;
    horarioSalida: string;
  }
}