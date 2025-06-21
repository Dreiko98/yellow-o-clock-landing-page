import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Fase A: redirigir al success local para pruebas
    // En Fase B esto se conectará al backend Flask
    
    // Simular un pequeño delay como si fuera una llamada real
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Devolver URL de éxito para testing
    res.status(200).json({ 
      url: "/success",
      sessionId: "test_session_" + Date.now()
    });
    
  } catch (error) {
    console.error('Error en checkout:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      url: "/cancel"
    });
  }
}

// Para Fase B - cuando se conecte con el backend Flask:
/*
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Llamar al backend Flask
    const response = await fetch('https://backend-domain.com/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Parámetros necesarios para Stripe
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Error creating checkout session');
    }

    res.status(200).json({ url: data.url });
    
  } catch (error) {
    console.error('Error en checkout:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      url: "/cancel"
    });
  }
}
*/
