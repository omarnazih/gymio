import { Button } from "@/components/ui/button";
import Layout from "@/layouts/layout";
import { toast } from "sonner";

function HomePage() {
  const sayHello = () => {
    toast.success("Hello from home page");
  };
  return (
    <Layout>
      <h1>Hello from home page</h1>
      <Button onClick={sayHello}>SayHello</Button>
    </Layout>
  );
}

export default HomePage;
