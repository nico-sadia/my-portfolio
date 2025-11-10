type TextInputProps = React.ComponentPropsWithoutRef<"input">;

export default function TextInput({ ...props }: TextInputProps) {
    return (
        <input
            {...props}
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full resize-none focus:outline-none focus:ring-2"
        ></input>
    );
}
