import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
    h1: ({ children }) => <h1 className="text-lime-500">{children}</h1>,
    img: (props) => <Image {...(props as ImageProps)} />,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
