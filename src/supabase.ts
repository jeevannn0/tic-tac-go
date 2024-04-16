import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cyldrbzsweloojwivwnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bGRyYnpzd2Vsb29qd2l2d256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNjkxODAsImV4cCI6MjAyODg0NTE4MH0.NdlmAzcNMYZ2BoUDVQxP_EL9so-15MCmbv3Kwu9U-0c';
export const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      eventsPerSecond: 20,
    },
  },
});
