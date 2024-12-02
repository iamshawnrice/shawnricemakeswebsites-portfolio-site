import { Button } from "app/components/ui/button";
import { HStack } from "@chakra-ui/react";

export default function Admin() {
  return (
    <section>
      <h1>Hello from the Admin Page</h1>

      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </section>
  );
}
