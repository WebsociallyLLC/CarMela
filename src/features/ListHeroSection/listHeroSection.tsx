'use client';

import SearchBar from '@/features/HeroSection/searchBar2';

const ListHeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/list-hero.svg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
      <img
        src="/assets/icons.svg"
        alt="Highway"
        className="absolute inset-0 w-full h-full mt-4 object-contain opacity-80 z-30 pointer-events-none"
      />
      <div className="relative pt-24 z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center">
        <div className="w-full md:ps-72 ps-0 max-w-[1600px] mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};
export default ListHeroSection;
