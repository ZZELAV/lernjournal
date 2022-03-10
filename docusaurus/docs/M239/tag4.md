# Tag 4

## 1 Installation Apache mit Default Website

### 1.1 Installation

Für die Installtion von Apache, kann folgender Befehl ausgeführt werden:  
```cmd
sudo apt install apache2
```

Nach der Installation kann die Default Website über [http://localhost](http://localhost) erreicht werden. Jetzt kann auch von der "BIND" VM über den Hostname die Website erreicht werden.

Default Config -> /etc/apache2/sites-available/000-default.conf

Log -> /var/log/apache2/

### 1.2 Konfiguration DNS

Damit die Seite über einen schönen Namen erreichbar ist, muss dies im DNS eingetragen werden. (Siehe [Forward-Zone](/docs/M239/tag3#132-forward-zone) & [Reverse-Zone](/docs/M239/tag3#133-reverse-zone))

### 1.3 Konfiguration Website

Website Directory -> /var/www/

Um eine neue eigene Website zu schreiben, muss im Website Directory ein neuer Ordner erstellt werden, in dem dann alle Dateien hineinkommen, die für die Website gebraucht werden.

[Apache konfigurieren](/appendix/M239/apache_config)