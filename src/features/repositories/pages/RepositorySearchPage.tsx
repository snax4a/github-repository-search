import Head from "next/head";
import MainLayout from "@/components/common/MainLayout";
import HeroSection from "@/features/repositories/components/HeroSection";
import RepositoriesCard from "@/features/repositories/components/RepositoriesCard";

export default function RepositoriesCardPage() {
  return (
    <>
      <Head>
        <title>GitHub Repository Search</title>
        <meta
          name="description"
          content="Find the best open-source projects on GitHub with our repository search tool. Browse through thousands of repositories and discover the code that powers some of the world's most popular software."
        />
      </Head>

      <MainLayout>
        <HeroSection />
        <RepositoriesCard />
      </MainLayout>
    </>
  );
}
