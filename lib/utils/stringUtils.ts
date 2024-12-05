import parse from "html-react-parser";

export const parseHTML = (htmlString: string) => {
  return parse(htmlString);
};
