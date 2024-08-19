import { fetchFavoriteId } from "@/utils/actions";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButton({
    productId,
    userId,
}: {
    productId: string;
    userId: string | null;
}) {
    const favoriteId = await fetchFavoriteId({ productId });
    if (!userId) return <CardSignInButton />;

    return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;
