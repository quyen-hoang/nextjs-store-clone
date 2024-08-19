"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
    className?: string;
    text?: string;
    size?: btnSize;
};

function SubmitButton({
    className = "",
    text = "submit",
    size = "lg",
}: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button
            type='submit'
            disabled={pending}
            className={cn("capitalize", className)}
        >
            {pending ? (
                <>
                    {" "}
                    <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                    Please wait...
                </>
            ) : (
                text
            )}
        </Button>
    );
}
export default SubmitButton;
