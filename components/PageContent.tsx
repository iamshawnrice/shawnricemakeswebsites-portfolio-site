import Image from "next/image";
import { PageContentT } from "types";

export const PageContent = ({ content }: { content: PageContentT[] }) => {
  return content.map((block) => {
    const { content, tag } = block;

    switch (tag) {
      case "img":
        return (
          <Image
            src={content.src}
            alt={content.alt}
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
            unoptimized
            width={content.width}
            height={content.height}
            priority
          />
        );
      case "p":
        const markup = { __html: content };
        return <p dangerouslySetInnerHTML={markup} />;
      default:
        break;
    }
  });
};
