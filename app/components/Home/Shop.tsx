import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div className="h-[100dvh] w-full relative flex items-center justify-center border-b">
      <div className="background absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/home/COVERS.jpg"
          fill
          alt="Sho´"
        />
      </div>
      <div className="shop-link relative z-10 w-80 aspect-square">
        <Link href="/shop">
          <Image src="/home/graphs-04.png" fill alt="Shop" className="object-contain" />
        </Link>
      </div>
    </div>
  );
};

export default Shop;
