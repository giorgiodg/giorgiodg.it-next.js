import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout>
      <div className='intro'>
        <div>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you’re looking for doesn’t exist.</p>
        </div>
        <Link href='/' className='link'>
          Go Back Home
        </Link>
      </div>
    </Layout>
  )
}
