import React from 'react';
import { Stamp } from 'lucide-react';

const VerifiedBadge = () => {
  return (
    <div className='flex justify-between items-center'>
      <p>Rheel Estate Verified Property</p>
      <Stamp size={20} />
    </div>
  );
};

export default VerifiedBadge;
