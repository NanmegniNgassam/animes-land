const Anime = async ({params} : { params: Promise<{id: string}> }) => {
  const { id } = await params;

  return (
    <main>
      <h1>Collecter des informations sur l&apos;animé { id }</h1>
    </main>
  );
}
 
export default Anime;