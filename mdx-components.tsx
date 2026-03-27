import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Figure from "./components/ui/Figure";
import Link from "./components/ui/Link";

const components: MDXComponents = {
    Figure,
    h1: ({ children }) => <h1 className="text-lime-500">{children}</h1>,
    img: (props) => <Image {...(props as ImageProps)} />,
    a: (props) => <Link {...props}></Link>,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
