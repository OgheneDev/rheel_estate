import React from 'react';

const PropertyCardSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="rounded-[20px] mb-5 bg-gray-200 h-[275px]" />
            <div className="h-7 bg-gray-200 w-1/3 mb-7 rounded" />
            <div className="flex gap-2 mb-2">
                <div className="w-5 h-5 bg-gray-200 rounded-full" />
                <div className="h-5 bg-gray-200 w-2/3 rounded" />
            </div>
            <div className="flex justify-between mt-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-1 items-center">
                        <div className="w-5 h-5 bg-gray-200 rounded-full" />
                        <div className="h-4 bg-gray-200 w-16 rounded" />
                    </div>
                ))}
            </div>
            <div className="mt-2 flex justify-between items-center">
                <div className="h-5 bg-gray-200 w-24 rounded" />
                <div className="h-8 bg-gray-200 w-24 rounded-full" />
            </div>
        </div>
    );
};

export default PropertyCardSkeleton;
