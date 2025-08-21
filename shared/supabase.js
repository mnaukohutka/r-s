// Import Supabase klienta přímo z CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Inicializace klienta s tvým projektem
export const supabase = createClient(
  'https://TVUJ-PROJEKT.supabase.co',    // nahraď adresou tvého Supabase projektu
  'TVUJ-ANON-KEY'                         // nahraď svým anonymním public klíčem
);

