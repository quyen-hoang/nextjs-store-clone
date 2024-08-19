// import { auth } from "@clerk/nextjs/server";
// import { CardSignInButton } from "../form/Buttons";
// import { fetchFavoriteId } from "@/utils/actions";
// import FavoriteToggleForm from "./FavoriteToggleForm";

// async function FavoriteToggleButton({ productId }: { productId: string }) {
//     const { userId } = auth();
//     if (!userId) return <CardSignInButton />;
//     const favoriteId = await fetchFavoriteId({ productId });

//     return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
// }
// export default FavoriteToggleButton;

import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
function FavoriteToggleButton({ productId }: { productId: string }) {
    return (
        <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
            <FaHeart />
        </Button>
    );
}
export default FavoriteToggleButton;
