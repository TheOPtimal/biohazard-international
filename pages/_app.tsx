/*
	Biohazard International Website - Biodegradable resource awareness website
	Copyright (C) 2021  Jacob Gogichaishvili

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Biohazard International</title>
        <meta
          name="description"
          content="Save the planet, use biodegradables."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<div className="wrapper"> 
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
    </>
  );
}

export default MyApp;
