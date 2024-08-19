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

// import { fetchFavoriteId } from "@/utils/actions";
// import { CardSignInButton } from "../form/Buttons";
// import FavoriteToggleForm from "./FavoriteToggleForm";
// import { auth } from "@clerk/nextjs/server";

// async function FavoriteToggleButton({ productId }: { productId: string }) {
//     const { userId } = auth();
//     const favoriteId = await fetchFavoriteId({ productId });
//     if (!userId) return <CardSignInButton />;

//     return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
// }
// export default FavoriteToggleButton;
