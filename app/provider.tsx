import React from 'react'
import Header from './_components/Header';
import Hero from './_components/Hero';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Provider
