# ZapTap

Tarjetas y placas NFC personalizadas para que negocios locales consigan reseñas en Google, seguidores en redes sociales y respuestas de encuestas con un solo toque.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Carrito de compras con React Context + localStorage
- Checkout vía WhatsApp (sin backend de pagos por ahora)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Pendientes de contenido
- Imágenes de producto (tarjetas, placas, tap display) — quedaron como placeholder en `src/data/products.ts` (`image: null`)
- Video demostrativo en la sección "Cómo funciona" (`src/components/HowItWorks.tsx`)

## Deploy
Configurado para desplegarse en Vercel con el dominio `zaptap.shop`.
