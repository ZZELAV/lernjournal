# Videothek

> ## Source Code

```java
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }
}
```

```java
public class Film {

    private int filmnummer;
    private String filmname;
    private double preis;

    public Film(String filmname, double preis) {

    }

}
```

```java
import java.util.ArrayList;

public class Kunde {

    private int kundennummer;
    private String kundenname;
    private String passwort;
    private double guthaben;
    private ArrayList<Film> filmeAusgeliehen;

    public Kunde(int kundenname, String passwort) {

    }

    public int getKundennummer() {
        return kundennummer;
    }

    public String getKundenname() {
        return kundenname;
    }

    public void setKundenname(String kundenname) {
        this.kundenname = kundenname;
    }

    public String getPasswort() {
        return passwort;
    }

    public void setPasswort(String passwort) {
        this.passwort = passwort;
    }

    public double getGuthaben() {
        return guthaben;
    }

    public String filmListe() {
        return "0";
    }

}
```

```java
public class StreamingServer {

    private int servernummer;
    private String servername;

    public String linkGenerieren(Kunde kunde, Film film) {
        return "0";
    }

}
```

```java
import java.util.ArrayList;

public class Videothek {

    private ArrayList<Kunde> kunden;
    private ArrayList<Film> filme;

    public void ausleihen() {

    }

    public void anmelden() {

    }

}
```
