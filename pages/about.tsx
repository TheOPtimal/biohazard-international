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

import type { NextPage } from "next";
import SectionContainer, { SectionData } from "../components/Section";

import biohazard from "../public/images/biohazard.png";
import greenFields from "../public/images/green-fields.png";

const Sections: SectionData[] = [
  {
    header: "Who we are",
    content: "Biohazard International is a small organization made up of one person hoping to spread awareness about the changes we can make in our own lives to make a difference worldwide.",
    image: biohazard,
		alt: "Biohazard Logo",
  },
	{
		header: "Let's help the world together",
		content: "Biohazard International is working towards a future without plastics or disposables. If we don't reach our goal, humanity's future may be doomed.",
		image: greenFields,
		reverse: true,
		alt: "Green Fields"
	}
];

const Home: NextPage = () => {
  return <SectionContainer data={Sections} />;
};

export default Home;
