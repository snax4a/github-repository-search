import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitHub Repository Search</title>
        <meta
          name="description"
          content="Find the best open-source projects on GitHub with our repository search tool. Browse through thousands of repositories and discover the code that powers some of the world's most popular software."
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Hello World
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
