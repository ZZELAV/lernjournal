# FQDN (Fully Qualified Domain Name)

Der FQDN ist der komplette Name einer Domäne. Folgend kann man den Aufbau sehen:  
![Bild FQDN Aufbau](/data/m239/fqdn.png)

Das oberste Element ist das Root-Element. Das ist ein einfacher Punkt. Oft wird bei der Eingabe einer Domäne der Punkt nicht mitgegeben, allerdings gehört er zur Domäne dazu.

Danach kommt die Top-Level-Domain. Das ist z.B. com, org oder ch.

Nach der Top-Level-Domain kommt die eigentliche Domäne (oder auch Second-Level-Domain genannt). Hier wird der Name der Domäne angegeben, wie z.B. allegro-packets oder google.

Der letzte Teil besteht aus der Subdomain (oder auch Third-Level-Domain genannt). Mit Subdomains können z.B. Dienste von der Domäne unterscheidet werden. Z.B. wird die Subdomain ftp für den File Transfer genutzt.

Somit gilt:  
`google.ch` = `www.google.ch.`

---

Quellen: [Bild FQDN Aufbau](https://allegro-packets.com/files/cms/Blog/DNS/Grafik-Baumstruktur.png)