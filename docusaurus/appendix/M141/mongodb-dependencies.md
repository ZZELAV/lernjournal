# MongoDB Dependencies

```
apt show mongodb-org
```

```text title="OUTPUT"
Package: mongodb-org
Version: 6.0.5
Priority: optional
Section: database
Maintainer: MongoDB Packaging <packaging@mongodb.com>
Installed-Size: 8,192 B
Depends: mongodb-org-database, mongodb-org-tools, mongodb-mongosh
Conflicts: mongo-10gen, mongo-10gen-enterprise, mongo-10gen-enterprise-server, mongo-10gen-server, mongo-10gen-unstable, mongo-10gen-unstable-enterprise, mongo-10gen-unstable-enterprise-mongos, mongo-10gen-unstable-enterprise-server, mongo-10gen-unstable-enterprise-shell, mongo-10gen-unstable-enterprise-tools, mongo-10gen-unstable-mongos, mongo-10gen-unstable-server, mongo-10gen-unstable-shell, mongo-10gen-unstable-tools, mongo18-10gen, mongo18-10gen-server, mongo20-10gen, mongo20-10gen-server, mongodb, mongodb-10gen, mongodb-10gen-enterprise, mongodb-10gen-unstable, mongodb-10gen-unstable-enterprise, mongodb-10gen-unstable-enterprise-mongos, mongodb-10gen-unstable-enterprise-server, mongodb-10gen-unstable-enterprise-shell, mongodb-10gen-unstable-enterprise-tools, mongodb-10gen-unstable-mongos, mongodb-10gen-unstable-server, mongodb-10gen-unstable-shell, mongodb-10gen-unstable-tools, mongodb-clients, mongodb-dev, mongodb-enterprise, mongodb-enterprise-mongos, mongodb-enterprise-server, mongodb-enterprise-shell, mongodb-enterprise-tools, mongodb-enterprise-unstable, mongodb-enterprise-unstable-mongos, mongodb-enterprise-unstable-server, mongodb-enterprise-unstable-shell, mongodb-enterprise-unstable-tools, mongodb-nightly, mongodb-org-unstable, mongodb-org-unstable-mongos, mongodb-org-unstable-server, mongodb-org-unstable-shell, mongodb-org-unstable-tools, mongodb-server, mongodb-stable, mongodb18-10gen, mongodb20-10gen
Homepage: http://www.mongodb.org
Download-Size: 2,802 B
APT-Manual-Installed: yes
APT-Sources: https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0/multiverse amd64 Packages
Description: MongoDB open source document-oriented database system (metapackage)
 MongoDB is built for scalability, performance and high availability, scaling from single server deployments to large, complex multi-site architectures. By leveraging in-memory computing, MongoDB provides high performance for both reads and writes. MongoDB’s native replication and automated failover enable enterprise-grade reliability and operational flexibility.
 .
 MongoDB is an open-source database used by companies of all sizes, across all industries and for a wide variety of applications. It is an agile database that allows schemas to change quickly as applications evolve, while still providing the functionality developers expect from traditional databases, such as secondary indexes, a full query language and strict consistency.
 .
 MongoDB has a rich client ecosystem including hadoop integration, officially supported drivers for 10 programming languages and environments, as well as 40 drivers supported by the user community.
 .
 MongoDB features:
 * JSON Data Model with Dynamic Schemas
 * Auto-Sharding for Horizontal Scalability
 * Built-In Replication for High Availability
 * Rich Secondary Indexes, including geospatial
 * TTL indexes
 * Text Search
 * Aggregation Framework & Native MapReduce
 .
 This metapackage will install the mongo shell, import/export tools, other client utilities, server software, default configuration, and init.d scripts.

N: There are 2 additional records. Please use the '-a' switch to see them.
```
