import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    Svg: require('@site/static/img/undraw_new_entries_re_cffr.svg').default,
    title: (
      <>
        Aktuelles Semester
      </>
    ),
    description: (
      <>
        Wir sind aktuell im 4. Semester
      </>
    ),
  },
  {
    Svg: require('@site/static/img/undraw_key_points_re_u903.svg').default,
    title: (
      <>
        Lernjournal
      </>
    ),
    description: (
      <>
        Dieses Lernjournal wird geführt, um das Erlernte festzuhalten.
      </>
    ),
  },
  {
    Svg: require('@site/static/img/undraw_file_manager_re_ms29.svg').default,
    title: (
      <>
        Aktuelle Module
      </>
    ),
    description: (
      <>
        M122, M126, M226B, M239
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        <h3>{title}</h3>
      </div>
      <div className="text--center padding-horiz--md">
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
