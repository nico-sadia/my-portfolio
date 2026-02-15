"use client";
import { ReactNode, useState } from "react";
import Button from "./Button";

type ModalProps = {
    buttonText?: string;
    icon?: ReactNode;
    children: ReactNode;
};

export default function Modal({ buttonText, children, icon }: ModalProps) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {buttonText && (
                <Button onClick={() => setOpen(true)}>{buttonText}</Button>
            )}

            {icon && <span>{icon}</span>}

            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 min-w-1/4 space-y-4 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                        <Button onClick={() => setOpen(false)}>close</Button>
                    </div>
                </div>
            )}
        </>
    );
}
