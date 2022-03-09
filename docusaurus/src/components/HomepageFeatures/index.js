import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
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

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
