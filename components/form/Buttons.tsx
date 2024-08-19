"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { LuPenSquare, LuTrash2 } from "react-icons/lu";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
    className?: string;
    text?: string;
    size?: btnSize;
};

type actionType = "edit" | "delete";

export function SubmitButton({
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
            size={size}
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

export const IconButton = ({ actionType }: { actionType: actionType }) => {
    const { pending } = useFormStatus();
    const renderIcon = () => {
        switch (actionType) {
            case "edit":
                return <LuPenSquare />;
            case "delete":
                return <LuTrash2 />;
            default:
                const never: never = actionType;
                throw new Error(`Invalid action type ${never}`);
        }
    };

    return (
        <Button
            type='submit'
            variant='link'
            size='icon'
            className='p-2 cursor-pointer'
        >
            {pending ? <ReloadIcon className='animate-spin' /> : renderIcon()}
        </Button>
    );
};

export const CardSignInButton = () => {
    return (
        <SignInButton mode='modal'>
            <Button
                type='button'
                size='icon'
                variant='outline'
                className='p-2 cursor-pointer'
                asChild
            >
                <FaRegHeart />
            </Button>
        </SignInButton>
    );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
    return (
        <Button
            type='submit'
            size='icon'
            variant='outline'
            className='p-2 cursor-pointer'
        >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </Button>
    );
};
