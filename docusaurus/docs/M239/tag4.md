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