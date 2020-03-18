import Layout from '../components/Layout';
import useFetch from '../utils/useFetch';

export default function Index() {
  useFetch('https://covid19.mathdro.id/api/');
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}
