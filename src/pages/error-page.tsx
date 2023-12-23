import { useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  message?: string;
}

export default function ErrorPage() {
  const { error } = useRouteError() as { error: RouteError };

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-6xl font-bold text-muted-foreground">
        {error?.status || "404"}
      </h1>
      <p className="text-lg text-center text-muted-foreground">
        {error?.message || "Page not found"}
      </p>
    </div>
  );
}
