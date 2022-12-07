import Head from "next/head"
import Footer from "./footer";

export default function About() {
  return (
    // <div>
    // <header className="text-center mb-8 mt-20 ">
    //   <h1 className="text-gray6 dark:text-gray1">About</h1>
    //   <p className="my-2 text-gray4 dark:text-gray3">This is about our system...</p>
    // </header>
    // <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>

    //  {/* Content */}
    // </div>
    <main>
    <div class="container p-8 prose dark:prose-invert prose-base md:prose-lg">
      <header className="text-center mb-8 mt-6">
        <h1 className=" text-gray6 dark:text-gray1">About</h1>
        <p className="my-2 text-gray4 dark:text-gray3">
          This is about our system...
        </p>
        <div className="mx-auto w-24 h-1 my-4 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
      </header>
      <h2 className="text-center md:text-left">Our Mission</h2>
      <p>
        Health monitoring system is pune’s growing health monitoring site to let
        the hospital manage their patient's health paramaters anywhere, anytime.
        Our aim is to make patient’s health parameter accessible to doctors all
        over the world for the quick treatment. Our product is designed with
        latest tech in market to enhance the performance ahead and make
        organizations become advance at treatment in no time.
      </p>
      <h2 className="text-center md:text-left">what's in it for you</h2>
      <p>
        The Health monitoring system's Kit will let the doctor or the nurse
        measure the patient's Body temperature, heart rate which will
        automatically update the real-time data from the kit to WeCare Website
        which will be accessible to the organization as well as doctor remotely.
      </p>
      <h2 className="text-center md:text-left">what we do</h2>
      <p>
        We let the organization monitor their patient's health parameter by
        collecting the data from the WeCare kit provided to the organization.{" "}
      </p>
      <h2 className="text-center md:text-left">Terms &amp;&amp; Conditions</h2>
      <p>
        By accessing this website, you are agreeing to be bound by these website
        Terms and Conditions of Use, all applicable laws, and regulations, and
        agree that you are responsible for compliance with any applicable local
        laws. If you do not agree with any of these terms, you are prohibited
        from using or accessing this site. The materials contained in this
        website are protected by applicable copyright and trademark law.
      </p>
      <h3 className="text-center md:text-left">Content Copyright Policy</h3>
      <p>
        The site design, logo, video content subject to copyright © 2022-present
        | Health Monitoring System LLC
      </p>
    </div>
    <Footer />
    </main>
  );
}