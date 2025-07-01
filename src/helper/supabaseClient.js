import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://burxaatloappqiutmefg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1cnhhYXRsb2FwcHFpdXRtZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTA4MTIsImV4cCI6MjA2NjY2NjgxMn0.rjd_PzbzK6-aeHrzyqUEOQC9GBkjqV5fVT_dsB82Ybw";

const supabase = createClient(supanaseUrl, supabaseAnonKey);
export default supabase