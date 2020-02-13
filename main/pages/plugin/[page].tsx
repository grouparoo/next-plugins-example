import dynamic from "next/dynamic";
import { Component } from "react";
import { useRouter } from "next/router";

export default function PluginContainerPage() {
  const router = useRouter();

  if (!router?.query?.page) {
    return null;
  }

  const PluginComponent = dynamic(
    () => import(`./../../node_modules/plugin/pages/${router.query.page}`),
    {
      ssr: false,
      loading: () => <p>Loading...</p>
    }
  );

  return <PluginComponent />;
}
