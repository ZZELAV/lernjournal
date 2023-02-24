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
