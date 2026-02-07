import { ValidationError } from "@formspree/react";

type ValidationErrorTextProps = {
    errors: any;
    field: string;
    prefix?: string;
};

export default function ValidationErrorText({
    errors,
    field,
    prefix,
}: ValidationErrorTextProps) {
    return (
        <ValidationError
            prefix={prefix}
            field={field}
            errors={errors}
            className="text-red-500 text-xs"
        />
    );
}
