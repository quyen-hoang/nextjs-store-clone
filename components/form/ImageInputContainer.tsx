"use client";

import type { actionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";

type ImageInputContainerProps = {
    image: string;
    name: string;
    action: actionFunction;
    text: string;
    children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
    const { image, name, action, text } = props;
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

    return (
        <div className='mb-8'>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                priority
                className='rounded-md object-cover mb-4 w-[200px] h-[200px]'
            />

            <Button
                variant='outline'
                size='sm'
                onClick={() => setIsUpdateFormVisible((prev) => !prev)}
            >
                {text}
            </Button>
            {isUpdateFormVisible && (
                <div className='max-w-md mt-4'>
                    <FormContainer action={action}>
                        {props.children}
                        <ImageInput />
                        <SubmitButton size='sm' />
                    </FormContainer>
                </div>
            )}
        </div>
    );
}
export default ImageInputContainer;
