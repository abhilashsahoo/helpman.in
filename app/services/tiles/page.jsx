// app/services/tiles-granite/page.js
import { Metadata } from 'next';
import TilesGranitePage from './TilesGranite';


export const metadata = {
  title: 'Professional Tiles & Granite Services | Helpman Services',
  description: 'Expert tiles and granite installation services for floors, walls, and countertops. Premium materials and craftsmanship for lasting elegance.',
  keywords: [
    'tiles installation',
    'granite flooring',
    'kitchen countertops',
    'bathroom tiles',
    'wall tiles',
    'floor tiles',
    'custom tile designs',
    'granite countertops'
  ]
};

export default function Page() {
  return <TilesGranitePage />;
}