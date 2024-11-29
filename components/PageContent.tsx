import Image from "next/image";
import parse from "html-react-parser";
import { PageContentT } from "types";

export const PageContent = ({ content }: { content: PageContentT[] }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      {content.map((block) => {
        const { className, content, tag } = block;

        switch (tag) {
          case "img":
            return (
              <div className="flex justify-center">
                <Image
                  src={content.src}
                  alt={content.alt}
                  className="mb-8 rounded-full"
                  unoptimized
                  width={240}
                  height={240}
                  priority
                />
              </div>
            );
          case "h2":
          case "h3":
            const Tag = tag;
            return <Tag className={className}>{content}</Tag>;
          case "p":
            return <p className={className}>{parse(content)}</p>;
          default:
            break;
        }
      })}
    </div>
  );
};
