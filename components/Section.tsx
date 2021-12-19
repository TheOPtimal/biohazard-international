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
import Image from "next/image";
import { ReactNode } from "react";
import styles from "../styles/Section.module.scss";

export interface SectionData {
  header: string;
  content: ReactNode;
	id?: string;
  image: StaticImageData;
	alt: string;
  reverse?: boolean;
}

export interface SectionPropsCustom {
  header: string;
  image: StaticImageData;
	alt: string;
  reverse?: boolean;
  children: ReactNode;
}

export interface ContainerPropsCustom {
  data: SectionData[];
}

export type SectionProps = JSX.IntrinsicElements["div"] & SectionPropsCustom;

export type ContainerProps = JSX.IntrinsicElements["div"] &
  ContainerPropsCustom;

export const Section: NextPage<SectionProps> = ({
  header,
  image,
	alt,
  reverse = false,
  children,
	...props
}) => (
  <section
    className={[styles.section, reverse ? styles.sectionReverse : ""].join(" ")}
		{...props}
  >
    <div className={styles.textContainer}>
      <h2>{header}</h2>
      <p>{children}</p>
    </div>
    <Image src={image} alt={alt} />
  </section>
);

export const SectionContainer: NextPage<ContainerProps> = ({ data, ...props }) => (
  <div className={styles.sectionContainer} {...props}>
    {data.map((section, index) => (
      <Section
        header={section.header}
        image={section.image}
				alt={section.alt}
				id={section.id}
        reverse={section.reverse}
				key={index}
      >
        {section.content}
      </Section>
    ))}
  </div>
);

export default SectionContainer
