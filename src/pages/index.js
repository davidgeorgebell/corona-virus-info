import Info from '../components/Info';
import Layout from '../components/Layout';
import CountrySelect from '../components/CountrySelect';

export default function Index() {
  return (
    <Layout>
      <Info url='https://covid19.mathdro.id/api/'></Info>
      <CountrySelect />
    </Layout>
  );
}
