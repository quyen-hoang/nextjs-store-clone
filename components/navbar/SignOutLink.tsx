"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useToast } from "../ui/use-toast";

function SignOutLink() {
    const { toast } = useToast();
    const handleClick = () => {
        toast({ description: "Logging Out..." });
    };
    return (
        <SignOutButton>
            <Link href='/' className='w-full text-left' onClick={handleClick}>
                Logout
            </Link>
        </SignOutButton>
    );
}
export default SignOutLink;
