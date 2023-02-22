# Bücherei

> ## Source Code

```java
import java.util.ArrayList;

public class App
{
    public static void main(String[] args)
    {
        ArrayList<String> kunde = new ArrayList<String>();
        kunde.add("Fritz");
        kunde.add("Peter");
        kunde.add("Hans");
        kunde.add("Anna");
        kunde.add("Jürgen");
        System.out.println(kunde);

        ArrayList<String> buch = new ArrayList<String>();
        for (int i = 0; i < 16; i++) {
            buch.add("Titel0" + i);
        }
        System.out.println(buch);

        /* Kunde[] kundenArray = new Kunde[5];
        Buch[] buchArray = new Buch[16];

        for (int i = 0; i < kundenArray.length; i++) {
            kundenArray[i] = new Kunde();
            kundenArray[i].setNameKunde("Kunde0" + i);
        }

        for (int i = 0; i < buchArray.length; i++) {
            buchArray[i] = new Buch();
            buchArray[i].setTitel("Titel0" + i);
        }

        kundenArray[0].BuchLeihen(buchArray[0]);
        kundenArray[0].ListeAusgeben(); */

    }
}
```

```java
public class Buch {
    private String titel;
    private boolean ausgeliehen = false;

    public void ausleihen() {
        ausgeliehen = true;
    }

    public void zurueck() {
        ausgeliehen = false;
    }

    public boolean getStatus() {
        return ausgeliehen;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public String getTitel() {
        return titel;
    }

}
```

```java
public class Kunde {
    private String nameKunde;
    private Buch[] buchArray = new Buch[10];

    public void BuchLeihen(Buch buch) {
        if(!buch.getStatus()) {
            boolean slotgefunden = false;

            for (int i = 0; i < buchArray.length && !slotgefunden; i++) {
                if(buchArray[i] == null) {
                    buchArray[i] = buch;
                    slotgefunden = true;
                    buch.ausleihen();
                    System.out.println("Buch positioniert an Slot " + i);
                }
            }

            if(!slotgefunden) {
                System.out.println("Fehler: Kein freier Slot gefundenm das Buch konnte nicht ausgeliehen werden");
            }
        }

        else {
            System.out.println("Achtung: Buch wurde bereits ausgeliehen...geht nicht");
        }
    }

    public void BuchZurueckgeben(Buch buch) {
        if(buch.getStatus()) {
            boolean buchgefunden = false;

            for (int i = 0; i < buchArray.length && !buchgefunden; i++) {
                if(buchArray[i] == buch) {
                    buchgefunden = true;
                    buchArray[i] = null;
                    buch.zurueck();
                    System.out.println("Buch wurde von Slot " + i + "zurückgegeben.");
                }
            }

            if(!buchgefunden) {
                System.out.println("Fehler: Buch nicht gefunden. Das Buch konnte nicht zurückgegeben werden.");
            }
        }

        else {
            System.out.println("Achtung: Buch wurde bereits zurückgegeben.");
        }
    }

    public void ListeAusgeben() {
        for (int i = 0; i < buchArray.length; i++) {
            if(buchArray[i] != null) {
                System.out.println("Titel Buch, Position " + i + " " + buchArray[i].getTitel());
            }
        }
    }

    public String getNameKunde() {
        return nameKunde;
    }

    public void setNameKunde(String nameKunde) {
        this.nameKunde = nameKunde;
    }

}
```
