import Image from "next/image";
// import { Button } from "./Button";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Button
        type="button"
        label="우편번호 찾기"
        width="full"
        fontSize="base"
        className="hover:bg-blue-500"
      /> */}

      <Button variant={"default"} size={"default"}>
        Click me
      </Button>

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </main>
  );
}
