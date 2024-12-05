import Image from "next/image";
import { PageContentT } from "types";
import { parseHTML } from "lib/utils/stringUtils";

export const PageContent = ({ content }: { content: PageContentT[] }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      {content.map((block, i) => {
        const { className, content, tag } = block;

        switch (tag) {
          case "img":
            return (
              <div className="flex justify-center" key={i}>
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
            return (
              <Tag className={className} key={i}>
                {content}
              </Tag>
            );
          case "p":
            return (
              <p className={className} key={i}>
                {parseHTML(content)}
              </p>
            );
          default:
            break;
        }
      })}
    </div>
  );
};
