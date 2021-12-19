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

import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => (
  <footer className={styles.footer} >
    Biohazard International | Copyright {new Date().getFullYear()} <br/>
		This website is licensed and distributed under AGPLv3-or-later.
		See <Link href="https://www.gnu.org/licenses/agpl-3.0.txt">here</Link> for more info.
  </footer>
);

export default Footer;
