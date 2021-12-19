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

import { NextComponentType } from "next";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar: NextComponentType = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <nav className={styles.nav}>
      <h1>
        <Link href="/">Biohazard International</Link>
      </h1>

      <ul className={styles.navList}>
        {links.map((element, index) => (
          <li key={index.toString()} className={styles.navItem}>
            <Link href={element.href}>{element.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
