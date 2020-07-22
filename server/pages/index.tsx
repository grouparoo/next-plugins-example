import Link from "next/link";

export default function () {
  return (
    <>
      <h1>Hello from the index</h1>
      <Link href="/plugins/my-nextjs-plugin/hello">
        <a>See the plugin</a>
      </Link>
    </>
  );
}
