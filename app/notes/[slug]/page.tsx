export default function MyNote(
  { params }
    :
    { params: { slug: string } }
) {
  return (
    <main>
      <h1>My Note {params.slug}</h1>
    </main>
  );

}