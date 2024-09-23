'use client';
import React, { useEffect, useState } from 'react';
import ReviewAllModal from './modal';
import ReviewItem from '@/components/cards/ReviewItem';
import ReviewFiltering from '@/components/ui/ReviewFiltering';
import ReviewOrdering from '@/components/ui/ReviewOrdering';
import { reviewDataType } from '@/types/ResponseTypes';
import {
  getMediaReviewList,
  getReviewIncludeImageList,
  getReviewList,
} from '@/actions/review/reviewActions';

function Page({ params }: { params: { productId: string } }) {
  const [filtering, setFiltering] = useState<string>('전체');
  const [ordering, setOrdering] = useState<string>('추천순');

  // productUUID 활용 무한스크롤 (use client) + 상품 이미지 관련 api 추가
  const [reviewList, setReviewList] = useState<reviewDataType[]>([]);
  const [mediaReviewList, setMediaReviewList] = useState<reviewDataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const reviewsExcludeImage = await getReviewList(params.productId, 0, 20);
      const reviewsIncludeImage =
        await getReviewIncludeImageList(reviewsExcludeImage);

      console.log(reviewsIncludeImage);
      setReviewList(reviewsIncludeImage);
    };
    getData();
  }, []);

  return (
    <ReviewAllModal>
      <div className="flex flex-col w-full gap-4 bg-starbucks-lightgray">
        {/* <section className="px-4 py-8 bg-white">
          <MediaReviewSummary />
        </section> */}
        <section className="px-4 pb-8 pt-4 bg-white">
          <div className="w-full h-10 text-sm text-gray-500 border-b flex justify-between">
            <ReviewFiltering
              filtering={filtering}
              setFiltering={setFiltering}
            />
            <ReviewOrdering ordering={ordering} setOrdering={setOrdering} />
          </div>
          <div className="flex flex-col gap-4 text-sm divide-y">
            {reviewList.map((review) => (
              <ReviewItem key={review.reviewUuid} review={review} />
            ))}
          </div>
        </section>
      </div>
    </ReviewAllModal>
  );
}

export default Page;
