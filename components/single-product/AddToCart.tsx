"use client";

import { useState } from "react";
import SelectProductAmount, {
    Mode,
} from "@/components/single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { ProductSignInButton, SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";

function AddToCart({ productId }: { productId: string }) {
    const [amount, setAmount] = useState(1);
    const { userId } = useAuth();

    return (
        <div className='mt-4'>
            <SelectProductAmount
                mode={Mode.SingleProduct}
                amount={amount}
                setAmount={setAmount}
            />
            {userId ? (
                <FormContainer action={addToCartAction}>
                    <input type='hidden' name='productId' value={productId} />
                    <input type='hidden' name='amount' value={amount} />
                    <SubmitButton
                        text='add to cart'
                        size='default'
                        className='mt-8'
                    />
                </FormContainer>
            ) : (
                <ProductSignInButton />
            )}
        </div>
    );
}
export default AddToCart;
