import Info from '../components/Info';
import Layout from '../components/Layout';
import CountrySelect from '../components/CountrySelect';

export default function Index() {
  return (
    <Layout>
      <h1>World Totals:</h1>
      <Info url='https://covid19.mathdro.id/api/'></Info>
      <CountrySelect />
    </Layout>
  );
}
