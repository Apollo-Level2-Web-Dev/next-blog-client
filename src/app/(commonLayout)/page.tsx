import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const session = await authClient.getSession();

  console.log(session);

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
