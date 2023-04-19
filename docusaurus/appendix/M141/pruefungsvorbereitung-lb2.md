---
title: "Prüfungsvorbereitung LB2"
tags:
  - M141
  - Prüfungsvorbereitung LB2
  - Datenbanksysteme
---

# Prüfungsvorbereitung LB2

## 1 Erklären Sie den Unterschied zwischen `ACID` und `BASE`

`ACID` garantiert die Konsistenz, ist allerdings nicht so flexibel und langsamer. Bei `BASE` kann es zustanden kommen, dass die Daten nicht immer konsistent sind, dafür ist es skalierbar und hochverfügbar.

[ACID](/docs/M141/tag-0002#11-beschreiben-sie-in-eigenen-worten-die-abkürzung-acid)  
[BASE](/docs/M141/tag-0002#12-beschreiben-sie-in-eigenen-worten-die-abkürzung-base)

## 2 Erklären Sie das CAP-Theorem mit Hilfe von einem Beispiel-DBMS

Das CAP-Theorem sagt, dass es nicht möglich ist alle drei Punkte (Consistency, Availability, Partitioning) zu erfüllen. Es muss sich für zwei der drei Punkte entschieden werden.

MySQL ist auf Konsistenz und Verfügbarkeit ausgelegt. MySQL ist nicht darauf ausgelegt das System auf verschiedene Knoten zu verteilen.

[CAP](/docs/M141/tag-0002#14-beschreiben-sie-das-cap-theorem)

## 3 Erklären Sie was Transaktionen sind und was _Anomalien_ sind. Erklären Sie in diesem Zusammenhang die Einstellungen zur Perfomancesteigerung

Transaktionen sind Abläufe die komplett oder gar nicht ausgeführt werden. Somit wird immer ein konsistenter Zustand zurückgelassen.

Ohne dem I von ACID kann es zu verschiedenen Problemen kommen.

Dirty Read: Daten von einer nicht abgeschlossenen Transaktion werden gelesen.

Lost Updates: Zwei Transaktionen arbeiten an dem gleichen Datensatz. Nach Abschluss der Transaktionen wird nur die Änderung der zweiten Transaktion geschrieben.

Non-Repeatable Read: Gleiche Lesevorgänge auf einem Datensatz liefern andere Ausgaben.

Phantom Read: Ein Lesevorgang von einer Transaktion liest Daten die gleichzeitig von einer anderen Transaktion geschrieben/bearbeitet werden.

Möchte man alle diese Probleme umgehen, geht das sehr auf die Kosten der Performance. Folgende Tabelle zeigt mögliche Einstellungen die diese Probleme umsetzen können.

| Isolationsebene | Dirty Read | Lost Updates | Non-Repeatable Read | Phantom |
| :-: | :-: | :-: | :-: | :-: |
| Read Uncommitted | möglich | möglich auch bei Db2 CS | möglich | möglich |
| Read Committed | unmöglich | möglich auch bei Db2 CS | möglich | möglich |
| Repeatable Read | unmöglich | unmöglich | unmöglich | möglich |
| Serializable | unmöglich | unmöglich | unmöglich | unmöglich |

[Quelle Tabelle](<https://de.wikipedia.org/wiki/Isolation_(Datenbank)>)

## 4 Erklären Sie `mysql_secure_installation`

`mysql_secure_installation` wird nach der Installation des MySQL Servers aufgerufen. Das ist ein Skript welches Sicherheitseinstellungen an der MySQL Installation vornimmt. Es kann folgendes konfiguriert werden:

- Root Passwort: Ein sicheres Passwort für den Root User setzen.
- Remote Root Login: Root User nur auf dem Server direkt erlauben.
- Anonymous User: Mit einem Anonymous User kann jeder ohne Passwort auf das System zugreifen. Dieser sollte entfernt werden.
- Test DB: Test Datenbank löschen.
- Rechtetabelle neuladen: Rechte der User neu laden.

## 5 Erklären Sie wie Linux in Kombination mit MySQL-Versionen funktioniert

Wird eine neue Linux-Version veröffentlicht, wird die Software auch geupdated. Somit muss bei einer neuen Linux-Version gegebenfalls auch eine andere MySQL-Version, als auf dem alten System installiert werden.

Eine Übersicht der MySQL-Version mit Zusammenhang der Ubuntu Version, kann [hier](https://packages.ubuntu.com/search?keywords=mysql-server) gefunden werden.

## 6 Erklären Sie was Storage Engines in MySQL sind. Benennen und beschreiben Sie die zwei wichtigsten Exemplare

Storage Engines legen fest, wie die Daten gespeichert und organisiert werden.

Die meisten SE's implementieren eine Art von Datenhaltung.

- flat files (einfache Text-Files)
- Hash-Tables
- Tree-Strukturen
- Heaps

[Tag 3 - Kapitel 2.1.1](/docs/M141/tag-0003#211-storage-engines-bei-mysql)

## 7 Wo die Daten bei MySQL effektiv gespreichert werden

Wo die Daten gespeichert werden kann in der Datei `/etc/mysql/mysql.conf.d/mysqld.cnf` festgelegt werden. Dafür muss die Variable `datadir` angepasst werden. Standardmässig ist das `/var/lib/mysql`.

## 8 Erklären Sie FK und PK Indexierungen

Beide Indexierungen dienen dazu, die Leistung des DBMS zu steigern und um sicherzustellen, dass die Daten konsistent und korrekt sind. Beide können auf eine oder mehrere Spalten angewendet werden.

Die Fremdschlüssel-Indexierung wird genutzt, damit die Daten auf einer anderen Tabelle referenziert werden können. Somit können Verknüpfungen zwischen Tabellen erstellt werden.

Die Primärschlüssel-Indexierung wird genutzt, damit sichergestellt werden kann, dass die Daten eindeutig identifizierbar sind.

![Beispiel PK und FK](/data/m141/pk_fk.gif)

## 9 Erklären Sie die die Datentypen JSON, ENUM, XY und machen Sie ein Beispiel für die Anwendung dieser Datenypen

[Tag 4 - Kapitel 2.1.3, Frage 2 & 3](/docs/M141/tag-0004#213-datentypen--attribute)

## 10 Vorgehen erklären beim Import und Export / Verschiedene Aufgabenstellungen vorformuliert

Der Import und Export von Daten in und aus einer MySQL-Datenbank ist ein wichtiger Bestandteil der Datenbankverwaltung.

Folgend ein paar Beispielaufgabenstellungen:

- Migration von Datenbank(server): Es können Daten in Form von SQL-Dateien exportiert und diese auf der Zielseite importiert werden.
- Sicherung von Daten: Backups einer Datenbank können am Einfachsten mit SQL-Dateien gemacht werden, sind aber auch mit CSV-Dateien möglich.

Ablauf von Import und Export kann bei [Tag 5](/docs/M141/tag-0005) gefunden werden.

## 11 Verschiedene Backupvarianten vergleichen und argumentieren

1. Full:  
   Bei einer vollständigen Sicherung werden alle Daten in der Datenbank gesichert. Dies ist die einfachste Art von Backup, da alle Daten gesichert werden und eine Wiederherstellung relativ einfach ist. Der Nachteil einer vollständigen Sicherung besteht jedoch darin, dass sie viel Zeit und Speicherplatz in Anspruch nehmen kann, insbesondere wenn die Datenbank sehr groß ist.

2. Incremental:  
   Eine inkrementelle Sicherung sichert nur die Änderungen seit dem letzten Backup. Dadurch können Backups schneller durchgeführt werden, und es wird weniger Speicherplatz benötigt. Der Nachteil besteht darin, dass die Wiederherstellung komplizierter sein kann, da mehrere inkrementelle Backups wiederhergestellt werden müssen.

3. Differential:  
   Ein Differential Backup sichert nur die Änderungen seit der letzten vollständigen Sicherung. Dadurch ist die Wiederherstellung schneller und einfacher als bei einer inkrementellen Sicherung, da nur zwei Backups wiederhergestellt werden müssen. Der Nachteil besteht jedoch darin, dass mehr Speicherplatz benötigt wird als bei einer inkrementellen Sicherung.

4. Online:  
   Ein Online-Backup sichert die Datenbank, während sie aktiv ist und keine Ausfallzeiten verursacht. Der Vorteil besteht darin, dass es keine Ausfallzeiten gibt und das Backup automatisch erfolgt. Der Nachteil besteht darin, dass es möglicherweise langsamer ist als eine Offline-Sicherung, da die Datenbank gleichzeitig gelesen und geschrieben werden muss.

5. Offsite:  
   Ein Offsite-Backup wird auf einem anderen Server oder in der Cloud gespeichert. Der Vorteil besteht darin, dass die Daten im Falle eines Serverausfalls oder einer Katastrophe sicher sind. Der Nachteil besteht darin, dass es möglicherweise langsamer ist als ein Backup auf einem lokalen Server, und es können zusätzliche Kosten für die Speicherung anfallen.

## 12 Verschiedene Migrationsvorgehen erläutern und vergleichen können

Migration per SSH und ZIP-Datei:

```sql
# Dump erstellen und direkt zippen
mysqldump --single-transaction -u root -p DB | gzip -9 > /tmp/DUMP_DB.sql.gz

# Files auf einen anderen Server kopieren, meistens über SSH
scp /tmp/DUMP_DB.sql.gz root@ANDERERSERVERIP:/tmp/

# Auf dem Zielserver neue NEUEDB erstellen

# Direktes Entzippen und importieren
gunzip < DUMP_DB.sql.gz | mysql -u root -p NEUEDB
```

Dieses Vorgehen braucht viel Zeit und Speicherplatz, da zuerst auf dem lokalen Server ein ZIP erstellt wird.

Direkte Verbindung:

```sql
# Export von local to remote:
mysqldump --single-transaction -u user -pPASS dbname -h localhost | mysql -u root -pPASS -h 192.168.1.1 dbname

# Import von Remote to local:
mysqldump --single-transaction -u user -pPASS dbname -h 192.168.1.1 | mysql -u root -pPASS -h localhost dbname
```

Hier gibt es zwei Möglichkeiten. Die erste wäre, man ist auf dem aktuellen Server verbunden und macht einen `mysqldump` per PIPE auf den neuen Server. Die zweite wäre, man ist auf dem neuem Server verbunden und holt sich mit `mysqldump` die Datenbank auf den neuen Server.

Der Nachteil von diesem Vorgehen ist, dass der TCP-Port 3306 (sofern Default) geöffnet sein muss und die Übertragung unverschlüsselt ist.

SSH und PIPE:

```sql
mysqldump --single-transaction -u root -pPASS DBNAME | ssh user@SERVER2 'mysql -u USER -pPASS NEWDB'
```

Hier ist man auf dem aktuellen Server verbunden und führt einen `mysqldump` aus. Dieser wird per PIPE an eine SSH-Verbindung übergeben. Über diese Verbidung ist die Übertragung verschlüsselt.

## 13 Angriffsvektoren anhand von einer Beispielapplikation analysieren und erläutern

[Tag 7 - Kapitel 1.5](/docs/M141/tag-0007#15-diskutieren-sie-die-security-angriffsvektoren-anhand-der-applikation-etherpad)

## 14 Beispiel-Importdatei auf Stored Procedures, Views und Triggers interpretieren

[Tag 8 - Kapitel 1.1.2](/docs/M141/tag-0008#112-sps-views-triggers-importcreate-befehle-dokumentiert)

## 15 Stored Procedures: Sinn, Anwendung und Syntax erläutern

Stored Procedures sind gespeicherte Prozeduren, die in der Datenbank gespeichert sind und von Benutzern aufgerufen werden können, um Daten in der Datenbank zu verarbeiten oder abzurufen. Stored Procedures sind ähnlich wie Programme, die innerhalb der Datenbank ausgeführt werden.

```sql
CREATE PROCEDURE delete_customer(IN customer_id INT)
BEGIN
    DELETE FROM customers WHERE id = customer_id;
END;
```

```sql
CALL delete_customer(1234);
```

## 16 Views: Sinn, Anwendung und Syntax erläutern

Views sind virtuelle Tabellen in einer Datenbank, die auf der Grundlage von Abfragen erstellt werden. Views sind eine wichtige Funktion in einer Datenbank, da sie es Benutzern ermöglichen, Daten aus einer oder mehreren Tabellen auf eine spezifische Weise abzurufen und zu analysieren, ohne dass die zugrunde liegenden Tabellen verändert werden müssen. Views sind hilfreich, wenn ein komplexer `JOIN` vereinfacht werden soll.

```sql
CREATE VIEW customer_order_count AS
SELECT customers.id, customers.name, COUNT(orders.id) AS order_count
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.id;
```

```sql
SELECT * FROM customer_order_count;
```

## 17 Triggers: Sinn, Anwendung und Syntax erläutern

Triggers werden automatisch ausgeführt, wenn bestimmte Ereignisse in einer Datenbank auftreten. Sie können auf verschiedene Arten konfiguriert werden, um bestimmte Aktionen auszulösen, wie z.B. das Aktualisieren von Daten in einer Tabelle oder das Senden einer E-Mail-Benachrichtigung.

```sql
CREATE TRIGGER update_customer_order_count
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE customers SET order_count = order_count + 1 WHERE id = NEW.customer_id;
END;
```

---

Quellen:

- https://www.thecrazyprogrammer.com/wp-content/uploads/2019/04/Difference-between-Primary-Key-and-Foreign-Key-1024x672.gif
