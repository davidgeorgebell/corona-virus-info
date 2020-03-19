import Info from '../components/Info';
import Layout from '../components/Layout';
import CountrySelect from '../components/CountrySelect';

export default function Index() {
  return (
    <Layout>
      <h1 className='index__title'>COVID-19 Tracker</h1>
      <h2 className='index__sub'>World Totals:</h2>
      <Info url='https://covid19.mathdro.id/api/'></Info>
      <h2 className='index__sub'>Search a Country:</h2>
      <CountrySelect />
    </Layout>
  );
}
