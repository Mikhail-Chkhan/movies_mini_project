"use client";

import React, { FC } from 'react';
import StarRatings from 'react-star-ratings';

interface StarRatingClientProps {
    rating: number;
}

const StarRatingClient: FC<StarRatingClientProps> = ({ rating }) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="#ff9c29"
            starEmptyColor="grey"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            name='rating'

        />
    );
};

export default StarRatingClient;
