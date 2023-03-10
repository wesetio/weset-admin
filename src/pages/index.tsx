import { type NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { type SetStateAction, useState, useEffect } from "react";
import Analytics from "~/components/analytics";
import Collectors from "~/components/collectors";
import Contracts from "~/components/contracts";
import LiveProjects from "~/components/live-projects";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const router = useRouter();
  const hello = api.example.hello.useQuery({ text: "from shadow" });
  const [activeTab, setActiveTab] = useState("contracts");
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  }; 

  // useEffect(() => {
  //   if (router.query.tab) {
  //     setActiveTab(router.query.tab.toString());
  //   }
  // }, [router.query]);

  return (
    <>
      <Head>
        <title>Weset HQ</title>
        <meta name="description" content="Generated by lyghtcode and shadow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white via-white to-blue-400 w-full">
        <div>
        {/* {hello.data ? hello.data.greeting : "Loading tRPC query..."} */}
        </div>
        <div className="px-6 md:mt-24 w-full flex flex-col items-center">
          <div className="tabs flex justify-center md:justify-start">
            <a
              className={`tab tab-bordered text-xs md:text-base font-semibold md:px-6 ${activeTab === "properties" ? "tab-active" : ""
                }`}
              onClick={() => handleTabClick("properties")}
            >
              Live Properties
            </a>
            <a
              className={`tab tab-bordered text-xs md:text-base font-semibold md:px-6 ${activeTab === "collectors" ? "tab-active" : ""
                }`}
              onClick={() => handleTabClick("collectors")}
            >
              Collectors
            </a>
            <a
              className={`tab tab-bordered text-xs md:text-base font-semibold md:px-6 ${activeTab === "contracts" ? "tab-active" : ""
                }`}
              onClick={() => handleTabClick("contracts")}
            >
              Contracts
            </a>
          <a
            className={`tab tab-bordered text-xs md:text-base font-semibold md:px-6 ${activeTab === "analytics" ? "tab-active" : ""
              }`}
            onClick={() => handleTabClick("analytics")}
          >
            Analytics
          </a>
          </div>
          <div>
            {activeTab === "properties" && <LiveProjects />}
            {activeTab === "collectors" && <Collectors />}
            {activeTab === "contracts" && <Contracts />}
            {activeTab === "analytics" && <Analytics />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
