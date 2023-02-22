# Bankkonto

> ## Source Code

```java
public class App {
    public static void main(String[] args) throws Exception {
        Bankkunde kunde01 = new Bankkunde();
        kunde01.setNachname("Müller");
        kunde01.neuesKonto();
        kunde01.neuesKonto();
        kunde01.neuesKonto();
        kunde01.neuesKonto();

        kunde01.ausgabe();
    }
}
```

```java
import java.util.ArrayList;
import java.util.Scanner;

public class Bankkunde {
    private String nachname;
    private ArrayList<Konto> konten = new ArrayList<Konto>();
    Scanner scanner = new Scanner(System.in);

    public void neuesKonto() {
        if (konten.size() >= 4) {
            System.out.println("FEHLER: Maximum an Konten pro Bankkunde erreicht");
        } else {
            System.out.println("--- Neues Konto anlegen ---\nKontonummer: ");
            String temp = scanner.nextLine();
            int tempInt = Integer.parseInt(temp);
            Konto konto = new Konto();
            konto.setKontoNummer(tempInt);
            konten.add(konto);
        }
    }

    public void ausgabe() {
        System.out.println("\nKonten des Bankkunden:");
        for (Konto konto : konten) {
            System.out.println(konto.getKontoNummer());
        }
    }

    public Bankkunde() {
        neuesKonto();
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getNachname() {
        return nachname;
    }
}
```

```java
public class Konto {
    private int kontoNummer;
    public boolean trueKontoNummer = true;

    public Konto() {
        kontoNummer = -1;
    }

    public int getKontoNummer() {
        return kontoNummer;
    }

    public void setKontoNummer(int kontoNummer) {
        if(kontoNummer <= 9999 && kontoNummer >= 1000) {
            this.kontoNummer = kontoNummer;
            System.out.println("--- Konto mit Nummer " + kontoNummer + " wurde erfolgreich angelegt ---");
        } else {
            System.out.println("FEHLER: Ungültige Kontonummer");
        }
    }
}
```
