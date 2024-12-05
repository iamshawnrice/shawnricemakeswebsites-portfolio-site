import { Text } from "./ui/Text";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};
export const AdminPageContent = ({ children, pageTitle }: Props) => {
  return (
    <>
      <header className="border-b mb-4">
        <Text
          className="text-xl font-bold font-sans text-black dark:text-white pb-2"
          as="h2"
        >
          {pageTitle}
        </Text>
      </header>
      <section>{children}</section>
    </>
  );
};
