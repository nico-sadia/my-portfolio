type TextAreaProps = React.ComponentPropsWithoutRef<"textarea">;

export default function Textarea({ ...props }: TextAreaProps) {
    return (
        <textarea
            {...props}
            className="border border-gray-300 rounded-lg p-2 h-32 w-full resize-none focus:outline-none focus:ring-2"
        ></textarea>
    );
}
