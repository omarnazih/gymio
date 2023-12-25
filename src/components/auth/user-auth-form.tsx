"use client";

import * as React from "react";

import { cn, getURL } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { AtSign } from "lucide-react";

import { supabaseClient } from "@/lib/supabase/api";
// import { toast } from "sonner";
// import { redirect } from "react-router-dom";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handelLoginGoogle = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
      },
    });
  };
  //   async function onSubmit(event: React.SyntheticEvent) {
  //     event.preventDefault();
  //     setIsLoading(true);

  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: "omarnazihcs@gmail.com",
  //       password: "123",
  //     });

  //     if (error) {
  //       toast.error(error.message);
  //     }

  //     if (data) {
  //       toast.success("Login successfully");
  //       redirect("/");
  //     }

  //     setIsLoading(false);
  //   }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <LucideLoader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form> */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={handelLoginGoogle}
        // disabled={isLoading}
      >
        {/* {isLoading ? (
          <LucideLoader className="mr-2 h-4 w-4 animate-spin" />
        ) : ( */}
        <AtSign className="mr-2 h-4 w-4" />
        {/* )}{" "} */}
        Gmail
      </Button>
    </div>
  );
}
