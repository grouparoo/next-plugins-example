import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function() {
  const router = useRouter();

  if (!router?.query?.page) {
    return <p>Loading...</p>;
  }

  const Component = dynamic(() =>
    import(`./../../plugins/pages/${router.query.page}`)
  );

  return <Component />;
}
