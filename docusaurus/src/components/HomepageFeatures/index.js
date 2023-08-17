import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Aktuelles Semester",
    Svg: require("@site/static/data/undraw_new_entries_re_cffr.svg").default,
    description: <>Wir sind aktuell im 7. Semester</>,
  },
  {
    title: "Lernjournal",
    Svg: require("@site/static/data/undraw_key_points_re_u903.svg").default,
    description: (
      <>Dieses Lernjournal wird geführt, um das Erlernte festzuhalten.</>
    ),
  },
  {
    title: "Aktuelle Module",
    Svg: require("@site/static/data/undraw_file_manager_re_ms29.svg").default,
    description: <>M145, M182</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
