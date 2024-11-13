import Image from "next/image";
import { PageContentT } from "types";

export const PageContent = ({ content }: { content: PageContentT[] }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      {content.map((block) => {
        const { className, content, tag } = block;

        switch (tag) {
          case "img":
            return (
              <Image
                src={content.src}
                alt={content.alt}
                className={className}
                unoptimized
                width={content.width}
                height={content.height}
                priority
              />
            );
          case "h2":
          case "h3":
            const Tag = tag;
            return <Tag className={className}>{content}</Tag>;
          case "p":
            const markup = { __html: content };
            return <p className={className} dangerouslySetInnerHTML={markup} />;
          default:
            break;
        }
      })}
    </div>
  );
};
