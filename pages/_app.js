import '../styles/globals.css';
import { Layout } from '../components/layout/Layout';
import { SearchContextProvider } from '../context/SearchContext';


function MyApp({ Component, pageProps }) {
	return (
		<SearchContextProvider>
		<Layout>
			<Component {...pageProps} />
			</Layout>
		</SearchContextProvider>
	);
}

export default MyApp;
