import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqffadykddyoxfuhsmkb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZmZhZHlrZGR5b3hmdWhzbWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExODg0NjYsImV4cCI6MjA1Njc2NDQ2Nn0.pmfGXaRciM4QHNCvFgLmNONQ--RWb4IhdSyrHKc6pdk';

export const supabase = createClient(supabaseUrl, supabaseKey);
