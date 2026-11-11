import Image from "next/image";

interface FigureProps {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
    invert?: boolean;
}

export default function Figure({
    src,
    alt,
    caption,
    width,
    height,
    invert,
}: FigureProps) {
    return (
        <figure className="w-full min-w-0 overflow-hidden rounded-lg border-6 border-neutral-200 dark:border-neutral-800">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`block h-auto w-full max-w-full ${invert ? "dark:invert" : ""}`}
            />
            <figcaption className="italic bg-neutral-200 dark:bg-neutral-800 pt-3 p-1.5 m-0!">
                {caption}
            </figcaption>
        </figure>
    );
}
