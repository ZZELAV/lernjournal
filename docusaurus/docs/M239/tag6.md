# Tag 6

## 1 Security bei Webservern

### 1.1 Directory sicher erstellen

Um Directory's zu schützen, muss das Directory im VirtualHost über den Tag `<Directory>` konfiguriert werden. In der Konfiguration, kann dann z.B. definiert werden, vom welchem Netzwerk darauf zugegriffen werden.

```config
<VirtualHost *:80>
    # VirtualHost Konfiguration

    <Directory /subdir>    
        Options None    
        AllowOverride None    
        Order deny,allow    
        Deny from all    
        Allow from 10.20.0.0/24  
    </Directory>

</VirtualHost>
```

Standardmässig kann ein Client das Verzeichnis des Webservers durchsuchen. Um diese Funktion zu deaktivieren kann folgendes in die Config hinzugefügt werden:  
```config
<Directory /subdir>
    Options -Indexes
</Directory>
```

## 2 Selbsttest

![PDF Selbsttest Seite 1](/img/m239/selbsttest-1.png)
![PDF Selbsttest Seite 2](/img/m239/selbsttest-2.png)
![PDF Selbsttest Seite 3](/img/m239/selbsttest-3.png)
![PDF Selbsttest Seite 4](/img/m239/selbsttest-4.png)
