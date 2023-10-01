import React from 'react';
import Navbar from './Navbar';


const Root = (props : any) => {
  return (
    <div className="w-full flex h-[100dvh]">
      <aside className="h-full w-3/12 z-10 bg-black">
        <Navbar />
      </aside>
      <main className="max-h-[100dvh] overflow-y-scroll w-9/12">
        {props.children}
      </main>
    </div>
  );
};

export default Root;
