type ImageT = {
    alt: string;
    height: number;
    src: string;
    width: number;
}

export type PageContentT = {
    className?: string;
    content: ImageT;
    tag: "img";
} | {
    className?: string;
    content: string;
    tag: "p" | "h2" | "h3"
}

export type PageDataT = {
    content: PageContentT[];
    id: string;
    title: string;
}