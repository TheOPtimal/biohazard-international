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
import Link from "next/link";

import landfill from "../images/landfill.png";
import greenFields from "../images/green-fields.png";
import ecoMaterials from "../images/ecomaterials.jpg";
import plasticBag from "../images/plastic-bag.png";

const Sections: SectionData[] = [
  {
    header: "Landfills are becoming a problem.",
    content: "Most trash thrown away today is non-biodegradable. Meaning that it takes a very long time to degrade naturally, so it piles up in landfills, like the one shown here.",
    image: landfill,
		alt: "Landfill"
  },
	{
		header: "We can all help!",
		content: "By using less wasteful products and more biodegradable materials, we can all do our part in helping stop this attack on nature. See below to see how you can help.",
		image: greenFields,
		reverse: true,
		alt: "Green Fields"
	},
	{
		header: "So, where do we start?",
		content: <>You should start by looking at resources online, such as <Link href="https://mindseteco.co/biodegradable-materials/">this excellent one from Mindseteco</Link>. Remember that not all (re)sources can be trusted, and you should review more websites than one to get the full perspective.</>,
		image: ecoMaterials,
		id: "start",
		alt: "Plastic Cups"
	},
  {
    header: "Progress is still progress.",
    content: "Always know that even the most miniscule of efforts, help. You don't have to stop using plastics overnight, in fact you don't need to stop using plastic entirely. If you at least reduce your usage, it goes a long way.",
    image: plasticBag,
		reverse: true,
		alt: "Biodegradable Plastic Bags"
  },
];

const Home: NextPage = () => {
  return <SectionContainer data={Sections} />;
};

export default Home;
