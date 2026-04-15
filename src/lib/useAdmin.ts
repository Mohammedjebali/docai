"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-client";
import { isAdmin } from "@/lib/admin";

export function useIsAdmin() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setAdmin(isAdmin(user?.email));
    });
  }, []);

  return admin;
}
