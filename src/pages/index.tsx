import Head from 'next/head'

import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Layout>
  )
}

export default Home
