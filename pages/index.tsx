import Link from "next/link";

export default function() {
  return (
    <>
      <h1>Hello from the index</h1>
      <Link href="/plugin/other-page">
        <a>See the plugin</a>
      </Link>
    </>
  );
}
