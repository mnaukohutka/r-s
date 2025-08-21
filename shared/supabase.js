// Import Supabase klienta přímo z CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Inicializace klienta s tvým projektem
export const supabase = createClient(
  'https://dnidjzrljwlpifyhftwt.supabase.co',    // nahraď adresou tvého Supabase projektu
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaWRqenJsandscGlmeWhmdHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NzczNDMsImV4cCI6MjA2ODM1MzM0M30.L2-Jl5Ob0cMDAr-n0_KcOdaEr-87kWCb7c0QcXy3_Hw'                         // nahraď svým anonymním public klíčem
);

