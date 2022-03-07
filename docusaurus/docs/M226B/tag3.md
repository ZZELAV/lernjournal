# Tag 3

## 1 Zwischenstop GeomObjects

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        RechtWinkligesDreieck aDreieck = new RechtWinkligesDreieck(6, 3);
        Kreis aKreis = new Kreis(3.5);
        Viereck aViereck = new Viereck(2.5, 3.5);

        System.out.println(aDreieck.vorstellen());
        System.out.println(aKreis.vorstellen());
        System.out.println(aViereck.vorstellen());
    }
}
```

```java
package ch.bztf;

public class GeomObject {
    protected double flaeche, umfang;

    public String vorstellen() {
        String output = "Ich bin ein Geom-Object - Meine Flaeche ist " + flaeche + " und mein Umfang ist " + umfang + " und das als ";
        return output;
    }
}
```

```java
package ch.bztf;

public class RechtWinkligesDreieck extends GeomObject {
    private double seitea, seiteb, seitec;

    public RechtWinkligesDreieck(double seitea, double seiteb) {
        this.seitea = seitea;
        this.seiteb = seiteb;
        berechneUmfang();
        berechneFlaeche();
    }

    public void berechneUmfang() {
        seitec = Math.sqrt((Math.pow(seitea, 2)) + (Math.pow(seiteb, 2))); // pythagoras
        umfang = seitea + seiteb + seitec;
    }

    public void berechneFlaeche() {
        flaeche = (seitea * seiteb) / 2;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + "Dreieck.";
    }
}
```

```java
package ch.bztf;

public class Kreis extends GeomObject {
    private double radius;

    public Kreis(double radius) {
        this.radius = radius;
        berechneUmfang();
        berechneFlaeche();
    }

    public void berechneUmfang() {
        umfang = 2 * radius * Math.PI;
    }

    public void berechneFlaeche() {
        flaeche = Math.PI * Math.pow(radius, 2);
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + "Kreis.";
    }
}
```

```java
package ch.bztf;

public class Viereck extends GeomObject {
    private double seitea, seiteb;

    public Viereck(double seitea, double seiteb) {
        this.seitea = seitea;
        this.seiteb = seiteb;
        berechneUmfang();
        berechneFlaeche();
    }

    public void berechneUmfang() {
        umfang = (seitea + seiteb) * 2;
    }

    public void berechneFlaeche() {
        flaeche = seitea * seiteb;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + "Viereck.";
    }
}
```

UML:  
![UML](/img/m226b/plantuml/tag3_01.svg)

## 2 Beispiele

### 2.1 BZT5

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Person pers1 = new Person("Muster");

        Lernende lern1 = new Lernende("Moritz", 4711);

        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschMühle");

        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);

        Angestellte ange2 = new Angestellte("Schläffrig", 345, false);

        System.out.println(pers1.vorstellen());
        System.out.println(lern1.vorstellen());
        System.out.println(lehr1.vorstellen());
        System.out.println(ange1.vorstellen());
        System.out.println(ange2.vorstellen());
    }
}
```

```java
package ch.bztf;

public class Person {
    protected String nachname;

    protected Person(String nachname) {
        this.nachname = nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getNachname() {
        return nachname;
    }

    public String vorstellen() {
        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";
        return output;
    }
}
```

```java
package ch.bztf;

public class Mitarbeiter extends Person {
    protected int personalNummer;

    protected Mitarbeiter(String nachname, int personalNummer) {
        super(nachname);
        this.personalNummer = personalNummer;
    }

    protected Mitarbeiter(String nachname) {
        super(nachname);
    }

    public void setPersonalNummer(int personalNummer) {
        this.personalNummer = personalNummer;
    }

    public int getPersonalNummer() {
        return personalNummer;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";
    }
}
```

```java
package ch.bztf;

public class Lernende extends Person {
    private int nummer;

    public Lernende(String nachname) {
        super(nachname);
    }

    public Lernende(String nachname, int nummer) {
        super(nachname);
        this.nummer = nummer;
    }

    public void setNummer(int nummer) {
        this.nummer = nummer;
    }

    public int getNummer() {
        return nummer;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + " Meine Nummer ist " + getNummer();
    }
}
```

```java
package ch.bztf;

public class Lehrer extends Mitarbeiter {
    private String fachbereich;

    public Lehrer(String nachname, int personalNummer, String fachbereich) {
        super(nachname, personalNummer);
        this.fachbereich = fachbereich;
    }

    public void setFachbereich(String fachbereich) {
        this.fachbereich = fachbereich;
    }

    public String getFachbereich() {
        return fachbereich;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + " lehre " + getFachbereich();
    }
}
```

```java
package ch.bztf;

public class Angestellte extends Mitarbeiter {
    private boolean schulleitung;

    public Angestellte(String nachname) {
        super(nachname);
    }

    public Angestellte(String nachname, int personalNummer) {
        super(nachname, personalNummer);
    }

    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {
        super(nachname, personalNummer);
        this.schulleitung = schulleitung;
    }

    public void setSchulleitung(boolean schulleitung) {
        this.schulleitung = schulleitung;
    }

    public boolean isSchulleitung() {
        return schulleitung;
    }

    @Override
    public String vorstellen() {
        if(isSchulleitung() == false) {
            return super.vorstellen() + " bin einfacher Angestellter";
        } else {
            return super.vorstellen() + " bin Schulleitungsmitglied";
        }
    }
}
```

### 2.2 BZT6

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Person pers1 = new Person("Muster");

        Lernende lern1 = new Lernende("Moritz", 4711);

        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschMühle");

        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);

        Angestellte ange2 = new Angestellte("Schläffrig", 345, false);

        System.out.println(pers1.vorstellen());
        System.out.println(lern1.vorstellen());
        System.out.println(lehr1.vorstellen());
        System.out.println(ange1.vorstellen());
        System.out.println(ange2.vorstellen());

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        ange1.heiraten(ange2);
        lehr1.heiraten(lehr1);
        ange2.heiraten(lehr1);

        ange1.scheiden();
        ange2.scheiden();
        lehr1.scheiden();
    }
}
```

```java
package ch.bztf;

public class Person {
    protected String nachname;

    protected Person(String nachname) {
        this.nachname = nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getNachname() {
        return nachname;
    }

    public String vorstellen() {
        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";
        return output;
    }

    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt
                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!
    protected void heiraten(Person ehepartner) // 
    {
        if (this != ehepartner) // überprüfung ob nicht selber
        {
            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind
            {
                this.ehepartner = ehepartner; //  person auf ehepartner setzen
                ehepartner.ehepartner = this; // ?

                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");
            }
            else // wenn mind. jemand bereits verheiratet ist
            {
                System.out.println(nachname + " und " + ehepartner.getNachname() + " können nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");
            }
        }
        else // wenn selber
        {
            System.out.println(nachname + " kann sich nicht selber heiraten!");
        }
    }

    protected void scheiden() {
        if (ehepartner != null) {
            Person temp = ehepartner;
            ehepartner.ehepartner = null;
            this.ehepartner = null;

            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");
        } else {
            System.out.println(nachname + " ist nicht verheiratet.");
        }
    }

}
```

```java
package ch.bztf;

public class Mitarbeiter extends Person {
    protected int personalNummer;

    protected Mitarbeiter(String nachname, int personalNummer) {
        super(nachname);
        this.personalNummer = personalNummer;
    }

    protected Mitarbeiter(String nachname) {
        super(nachname);
    }

    public void setPersonalNummer(int personalNummer) {
        this.personalNummer = personalNummer;
    }

    public int getPersonalNummer() {
        return personalNummer;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";
    }
}
```

```java
package ch.bztf;

public class Lernende extends Person {
    private int nummer;

    public Lernende(String nachname) {
        super(nachname);
    }

    public Lernende(String nachname, int nummer) {
        super(nachname);
        this.nummer = nummer;
    }

    public void setNummer(int nummer) {
        this.nummer = nummer;
    }

    public int getNummer() {
        return nummer;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + " Meine Nummer ist " + getNummer();
    }
}
```

```java
package ch.bztf;

public class Lehrer extends Mitarbeiter {
    private String fachbereich;

    public Lehrer(String nachname, int personalNummer, String fachbereich) {
        super(nachname, personalNummer);
        this.fachbereich = fachbereich;
    }

    public void setFachbereich(String fachbereich) {
        this.fachbereich = fachbereich;
    }

    public String getFachbereich() {
        return fachbereich;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + " lehre " + getFachbereich();
    }
}
```

```java
package ch.bztf;

public class Angestellte extends Mitarbeiter {
    private boolean schulleitung;

    public Angestellte(String nachname) {
        super(nachname);
    }

    public Angestellte(String nachname, int personalNummer) {
        super(nachname, personalNummer);
    }

    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {
        super(nachname, personalNummer);
        this.schulleitung = schulleitung;
    }

    public void setSchulleitung(boolean schulleitung) {
        this.schulleitung = schulleitung;
    }

    public boolean isSchulleitung() {
        return schulleitung;
    }

    @Override
    public String vorstellen() {
        if(isSchulleitung() == false) {
            return super.vorstellen() + " bin einfacher Angestellter";
        } else {
            return super.vorstellen() + " bin Schulleitungsmitglied";
        }
    }
}
```

UML:  
![UML](/img/m226b/plantuml/tag3_02.svg)