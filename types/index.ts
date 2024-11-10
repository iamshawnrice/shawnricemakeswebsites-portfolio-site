type ImageT = {
    alt: string;
    height: number;
    src: string;
    width: number;
}

export type PageContentT = {
    content: ImageT;
    tag: "img";
} | {
    content: string;
    tag: "p"
}

export type PageDataT = {
    content: PageContentT[];
    id: string;
    title: string;
}