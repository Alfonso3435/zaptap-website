# ZapTap

Sitio de ZapTap: tarjetas NFC personalizadas para reviews de Google.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · carrito con React Context + localStorage · checkout por WhatsApp.

## Correr en local

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx                  fuentes, metadata SEO, CartProvider, CartDrawer
│   ├── page.tsx                    home (Problem Aware) — el orden ES la cadena de creencias
│   ├── globals.css                 tokens de marca en @theme de Tailwind v4
│   └── google-review-card/page.tsx landing corta (Solution Aware) para búsqueda
├── components/                     una sección = un componente
├── context/CartContext.tsx         carrito + localStorage
├── data/products.ts                catálogo y precios
├── lib/whatsapp.ts                 número, links wa.me, mensaje de checkout
└── types/index.ts
```

## Dónde tocar qué

| Quiero cambiar | Archivo |
|---|---|
| Precios, nombres, bundles | `src/data/products.ts` |
| Número de WhatsApp, email | `src/lib/whatsapp.ts` |
| Orden de las secciones | `src/app/page.tsx` |
| Colores, tipografías | `src/app/globals.css` |
| Preguntas del FAQ | `src/components/FAQ.tsx` |

## Pendientes marcados en el código (buscar `TODO(Poncho)` y `[NEEDS`)

1. `ZeroStepCapture.tsx` — video demo de 10 segundos
2. `ProductCard.tsx` — fotos reales en `/public/products/`
3. `Founder.tsx` — tu historia de origen, real
4. `WhyNotCheap.tsx` — testimonio con antes/después
5. `ROIMath.tsx` — valor de paciente nuevo de dental
