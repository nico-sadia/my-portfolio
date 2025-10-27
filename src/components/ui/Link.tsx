import NextLink from "next/link";

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
    href: string;
};

export default function Link({
    href,
    children,
    className,
    ...props
}: LinkProps) {
    const isExternal = href.startsWith("http");
    const style = className
        ? className
        : "underline hover:text-gray-400 underline-offset-2";
    if (isExternal) {
        return (
            <a
                href={href}
                className={style}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }
    return (
        <NextLink href={href} className={style}>
            {children}
        </NextLink>
    );
}
