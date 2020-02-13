import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function PluginContainerPage() {
  const router = useRouter();

  if (!router?.query?.page) {
    return null;
  }

  const PluginComponent = dynamic(
    () => import(`./../../node_modules/plugin/pages/${router.query.page}`),
    {
      loading: () => <p>Loading...</p>
    }
  );

  return <PluginComponent />;
}
