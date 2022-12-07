# Apache Config

Config aktivieren:  
```cmd
sudo a2ensite <CONFIG>
```

Config deaktivieren:
```cmd
sudo a2dissite <CONFIG>
```

:::caution Wichtig
Nachdem eine Config aktiviert/deaktivert wurde, muss Apache neu geladen werden (oder neu gestartet).  
```cmd
sudo systemctl reload apache2
sudo systemctl restart apache2
```
:::

**Mögliche Config-Datei:**  
```config title="/etc/apache2/sites-available/001-meineseite.conf"
# Wir hören auf alle Netzwerkschnittstellen auf dem TCP-Port 80
<VirtualHost *:80> 
    # Servername unserer Webseite
    ServerName example.com 
    # Wie unsere Webseite auch genannt wird
    ServerAlias www.example.com 
    # Kontakt bei Problemen
    ServerAdmin webmaster@example.com 
    # Ordner mit der Webseite drin <- index.html
    DocumentRoot /var/www/meineseite 
    # Wie detailliert wollen wir Log-Informationen sehen (emerg, alert, critical, error, warn, notice, info, debug)
    LogLevel warn
    # Wo sollen die Error-Logs gespeichert werden
    ErrorLog /var/log/apache2/meineseite/error.log
    # Wie sollen die Access Logs aussehen
    LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-agent}i\"" combined
    # Wo sollen die Access-Logs gespeichert werden
    CustomLog /var/log/apache2/meineseite/customlog.log combined
</VirtualHost>
```