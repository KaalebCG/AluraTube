import { createClient } from "@supabase/supabase-js";
const PROJECT_URL = "https://zrccpukldzottvbjulqv.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyY2NwdWtsZHpvdHR2Ymp1bHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MzI4NDksImV4cCI6MTk4NDAwODg0OX0.dN5bOHckD6l6gn0BTcVMLrLq79cOBjfZxC0hwZOUVaQ";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
