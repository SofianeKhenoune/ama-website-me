export default function Post({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  const { id } = params;
  return <main>Post {id}</main>;
}
