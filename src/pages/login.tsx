import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/api";
import { Session } from "@supabase/supabase-js";
// import { Link } from "react-router-dom";

import { UserAuthForm } from "@/components/auth/user-auth-form";

const LoginPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // supabase.auth.signOut();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    supabase.auth.signOut();
  }
  return (
    <div className="max-w-md mx-auto h-full mt-[25vh] ">
      <div className="flex flex-col space-y-2 text-center">
        {/* <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p> */}
      </div>
      <UserAuthForm />
      {/* <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          to="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p> */}
    </div>
  );
};

export default LoginPage;
