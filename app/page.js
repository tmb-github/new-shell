import Head from "../components/MicroHead";

export default function Home() {
  return (
    <>
      <Head
        canonical="https://localhost/shell/"
        title="Home | Shell"
        metaDescription="Home page description for SHELL application [70 characters are best here]."
      ></Head>
      <main>
        <h1>Home</h1>
        <p>Home page of Shell application</p>
      </main>
    </>
  );
}
