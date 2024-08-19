import FormContainer from "@/components/form/FormContainer";
import SectionTitle from "@/components/global/SectionTitle";
import ReviewCard from "@/components/reviews/ReviewCard";
import { deleteReviewAction, fetchProductReviewByUser } from "@/utils/actions";
import { IconButton } from "@/components/form/Buttons";

async function ReviewsPage() {
    const reviews = await fetchProductReviewByUser();
    if (reviews.length === 0)
        return <SectionTitle text='Your have no reviews yet.' />;

    return (
        <>
            <SectionTitle text='your reviews' />
            <section className='grid md:grid-cols-2 gap-8 mt-4'>
                {reviews.map((review) => {
                    const { id, rating, comment } = review;
                    const { name, image } = review.product;
                    const reviewInfo = {
                        name,
                        image,
                        rating,
                        comment,
                    };
                    return (
                        <ReviewCard key={id} reviewInfo={reviewInfo}>
                            <DeleteReview reviewId={id} />
                        </ReviewCard>
                    );
                })}
            </section>
        </>
    );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
    const deleteReview = deleteReviewAction.bind(null, { reviewId });
    return (
        <FormContainer action={deleteReview}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
};

export default ReviewsPage;
