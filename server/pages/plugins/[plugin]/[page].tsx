import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PluginContainerPage() {
  const router = useRouter();

  // The Next router might not be ready yet...
  if (!router?.query?.plugin) return null;
  if (!router?.query?.page) return null;

  // dynamically load the component
  const PluginComponent = dynamic(
    () =>
      import(
        `./../../../tmp/plugin/${router.query.plugin}/${router.query.page}`
      ),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <>
      <Link href="/">
        <a>Back</a>
      </Link>
      <hr />
      <PluginComponent />
    </>
  );
}
