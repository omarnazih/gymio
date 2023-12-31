import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY } from "./constants";

export const supabaseClient = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY
);
