import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Health Monitoring System</title>
      </Head>
      <main className=" h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row  md:pt-24">
          <div className="basis-1/2">
            <div className="flex flex-col justify-center items-center h-3/4 my-16">
              <article className="flex flex-col prose lg:prose-xl dark:prose-invert text-center w-2/3">
                <h1>
                  Health Monitoring{" "}
                  <span className="gradient-text">System</span>
                </h1>
                <p className="padding-horizontal-2">
                  This system is a{" "}
                  <span className="text-yellow-500 font-bold">remote</span>{" "}
                  platform to{" "}
                  <span className="text-pink-500 font-bold">monitor</span>{" "}
                  health anytime and anywhere.
                </p>
              </article>
            </div>
          </div>
          <div className="basis-1/2 w-auto">
            <div className=" flex items-center justify-center">
              <img src="/dashboard.svg" className=" object-center sm:w-1/2 w-3/4"></img>
            </div>
          </div>
        </div>

        {/* Midel Section */}
        <div></div>
      </main>
    </div>
  );
}
