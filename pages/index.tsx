import { GetStaticProps } from 'next'
import Head from 'next/head'

export default function Home({ org }) {
  return (
    <div>
      <Head>
        <title>Basic Nextjs</title>
      </Head>

      <main>
        <h1>{org.login}</h1>
        <h3>{org.description}</h3>

        <p>Site: <a href={org.blog}>{org.blog}</a></p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat');
  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10
  }
};
