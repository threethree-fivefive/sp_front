import BasicHeader from '@/components/layouts/BasicHeader';
import Footer from '@/components/layouts/Footer';
import ProductBottomNavbar from '@/components/pages/main/product/ProductBottomNavbar';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import ScrollProvider from '@/providers/ScrollProvider';
import React from 'react';

function Layout({
  children,
  productinfo,
  reviews,
  recommend,
  modal,
}: {
  children: React.ReactNode;
  productinfo: React.ReactNode;
  reviews: React.ReactNode;
  recommend: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {/* <BasicHeader /> */}
      <ScrollProvider>
        <div className="w-full h-full bg-starbucks-lightgray">
          {productinfo}
          {reviews}
          {recommend}
        </div>
        {children}
      </ScrollProvider>
      {modal}
      <ScrollTopButton />
      <Footer />
      <ProductBottomNavbar />
    </>
  );
}

export default Layout;
