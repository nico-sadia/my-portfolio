type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="border border-gray-300 rounded-lg p-2 hover:bg-button-hover-light dark:hover:bg-button-hover-dark transition-colors ease-linear duration-100 cursor-pointer"
        >
            {children}
        </button>
    );
}
