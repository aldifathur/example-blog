import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

function FirstPost() {
    return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <hr></hr>
      <h1>First Post New Page</h1>
      <h2>
        <Link href="/">
          <a className="foo" target="_blank" rel="noopener noreferrer">
            New Page Home
          </a>
        </Link>
      </h2>
    </Layout>
    )
}

export default FirstPost
