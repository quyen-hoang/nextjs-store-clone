import { fetchFavoriteId } from "@/utils/actions";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { auth } from "@clerk/nextjs/server";

async function FavoriteToggleButton({ productId }: { productId: string }) {
    const { userId } = auth();
    const favoriteId = await fetchFavoriteId({ productId });
    if (!userId) return <CardSignInButton />;

    return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;
