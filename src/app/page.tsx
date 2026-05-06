import HomeSlider from "@/components/HomeSlider/HomeSlider"
import MainFeaturesBar from './../components/MainFeaturesBar/MainFeaturesBar';
import HomeCategories from './../components/HomeCategories/HomeCategories';
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import HomeVouchers from './../components/HomeVouchers/HomeVouchers';
import NewsletterSection from "@/components/NewsLetterSection/NewsLetterSection";
import { lazy, Suspense } from "react";

const AllProducts = lazy(
  () => import("@/components/AllProducts/AllProducts"),
);

export default function page() {

  return (
    <>
      {/* Slider */}
      < HomeSlider />

      {/* FeaturesBar */}
      <MainFeaturesBar />

      {/* Categories */}
      <HomeCategories />

      {/* Vouchers Cards */}
      <HomeVouchers />

      {/* Products title */}
      <div className="px-4 mb-4 mt-12 container mx-auto">
        <SectionTitle BlackWord='Featured' GreenWord='Products' />
      </div>


      {/* Products Cards */}
      <Suspense>
        <AllProducts />
      </Suspense>

      {/* NewsLetterSection */}
      <NewsletterSection />
    </>
  )
}
