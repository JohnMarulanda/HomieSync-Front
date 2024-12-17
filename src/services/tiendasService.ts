import { Tienda } from "@/types/tienda";

export async function getTiendas(): Promise<Tienda[]> {
  try {
    const res = await fetch('http://localhost:8000/tienda/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Verifica si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    // Convierte la respuesta a JSON
    const data: Tienda[] = await res.json();
    const result = data.flat()

    return result;
  } catch (err) {
    console.error("Error al obtener tiendas:", err);
    return [];
  }
}

export async function getTiendaById(id: string): Promise<Tienda> {

  console.log(`Id de Tienda en service = ${id}`);
  try {
    const res = await fetch(`http://localhost:8000/tienda/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Verifica si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    // Convierte la respuesta a JSON
    const data: Tienda[] = await res.json();
    console.log(`Tienda en service = ${data[0]._id}`);

    // Retorna el primer elemento de la lista
    return data[0];
  } catch (err) {
    console.error("Error al obtener la tienda por ID:", err);
    return { /* provide default values for Tienda properties here */ } as Tienda;
  }
}