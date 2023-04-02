import siteConfig from "@/config/siteConfig";
import AnnouncementBanner from "@/features/repositories/components/AnnouncementBanner";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-[url('/assets/svg/squared-bg.svg')] before:bg-[center_top] before:bg-no-repeat lg:before:bg-[10px_15px]">
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <AnnouncementBanner
          title="This project is open sourced"
          actionText="Explore the Code"
          actionHref={siteConfig.githubRepoUrl}
        />

        <div className="mx-auto mt-5 max-w-xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-8xl">
            GitHub Repository Search
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-lg text-gray-600">
            Browse through thousands of repositories and discover the code that
            powers some of the world&apos;s most popular software.
          </p>
        </div>
      </div>
    </section>
  );
}
