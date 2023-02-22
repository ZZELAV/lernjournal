# Konto

> ## UML 01

```plantuml
class App{
    + main(String[] args) : void
    - scanner : Scanner
    - instanzTestKonto : Konto
    - instanzTestKonto1 : Konto
    - kontoInhaber : String
}

class Konto{
    - kontoInhaber : String
    - nameKonto : String
    - nummerKonto : int
    - saldoKonto : double
    + Konto()
    + Konto(String kontoInhaber, String nameKonto, int nummerKonto, double saldoKonto)
    + setKontoInhaber(String kontoInhaber) : void
    + setNameKonto(String nameKonto) : void
    + setNummerKonto(int nummerKonto) : void
    + setSaldoKonto(double saldoKonto) : void
    + getKontoInhaber() : String
    + getNameKonto() : String
    + getNummerKonto() : String
    + getSaldoKonto() : String
}
```

> ## Source Code 01

```java
package ch.zzelav;

import java.util.Scanner;

public class App
{
    public static void main( String[] args )
    {
        Scanner scanner = new Scanner(System.in);

        Konto instanzTestKonto = new Konto();
        Konto instanzTestKonto1 = new Konto();

        System.out.println("Kontoinhaber: ");
        String kontoInhaber = scanner.nextLine();
        instanzTestKonto.setKontoInhaber(kontoInhaber);

        System.out.println("Der Kontoinhaber wurde auf " + kontoInhaber + " gesetzt.");

        //instanzTestKonto1.nameKonto = "Sparkonto";
        //instanzTestKonto1.nummerKonto = 1;
        //instanzTestKonto1.saldoKonto = 1010.99;

    }
}
```

In dieser `App`-Klasse werden 2 Instanzen gesetzt. `instanzTestKonto` wird mit einem Konsolen-Input gesetzt.

```java
package ch.zzelav;

public class Konto {
    private String kontoInhaber;
    private String nameKonto;
    private int nummerKonto;
    private double saldoKonto;

    public Konto() {

    }

    public Konto(String kontoInhaber, String nameKonto, int nummerKonto, double saldoKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = nummerKonto;
        this.saldoKonto = saldoKonto;
    }

    public void setKontoInhaber(String kontoInhaber) {
        this.kontoInhaber = kontoInhaber;
    }

    public void setNameKonto(String nameKonto) {
        this.nameKonto = nameKonto;
    }

    public void setNummerKonto(int nummerKonto) {
        this.nummerKonto = nummerKonto;
    }

    public void setSaldoKonto(double saldoKonto) {
        this.saldoKonto = saldoKonto;
    }

    public String getKontoInhaber() {
        return kontoInhaber;
    }

    public String getNameKonto() {
        return nameKonto;
    }

    public int getNummerKonto() {
        return nummerKonto;
    }

    public double getSaldoKonto() {
        return saldoKonto;
    }

}
```

In der Klasse `Konto` werden verschiedene Attribute definiert. Sie besteht aus einem Standard-Konstruktor, einem Konstruktor mit vier Übergabeparametern und vier Settern & Gettern.

> ## UML 02

```plantuml
class App{
    + main(String[] args) : void
    - scanner : Scanner
    - instanzTestKonto : Konto
    - instanzTestKonto1 : Konto
    - kontoInhaber : String
    - kt01 : Konto
    - kt02 : Konto
    - kt03 : Konto
    - kt04 : Konto
}

class Konto{
    - kontoInhaber : String
    - nameKonto : String
    - nummerKonto : int
    - saldoKonto : double
    + Konto()
    + Konto(String kontoInhaber)
    + Konto(int nummerKonto)
    + Konto(double saldoKonto)
    + Konto(String kontoInhaber, String nameKonto)
    + Konto(String kontoInhaber, int nummerKonto)
    + Konto(String kontoInhaber, double saldoKonto)
    + Konto(int nummerKonto, double saldoKonto)
    + Konto(String kontoInhaber, String nameKonto, int nummerKonto)
    + Konto(String kontoInhaber, String nameKonto, int nummerKonto, double saldoKonto)
    + setKontoInhaber(String kontoInhaber) : void
    + setNameKonto(String nameKonto) : void
    + setNummerKonto(int nummerKonto) : void
    + setSaldoKonto(double saldoKonto) : void
    + getKontoInhaber() : String
    + getNameKonto() : String
    + getNummerKonto() : String
    + getSaldoKonto() : String
    - ausgabe : void
    + getKontoInhaberOut() : String
    + getNameKontoOut() : String
    + getNummerKontoOut() : String
    + getSaldoKontoOut() : String
}
```

> ## Source Code 02

```java
package ch.zzelav;

import java.util.Scanner;

public class App
{
    public static void main( String[] args )
    {
        Scanner scanner = new Scanner(System.in);

        Konto instanzTestKonto = new Konto();
        Konto instanzTestKonto1 = new Konto();

        System.out.println("Kontoinhaber: ");
        String kontoInhaber = scanner.nextLine();
        instanzTestKonto.setKontoInhaber(kontoInhaber);

        System.out.println("Der Kontoinhaber wurde auf " + kontoInhaber + " gesetzt.");

        //instanzTestKonto1.nameKonto = "Sparkonto";
        //instanzTestKonto1.nummerKonto = 1;
        //instanzTestKonto1.saldoKonto = 1010.99;



        Konto kt01 = new Konto("Goldfinger", "Debitor", 3000, 1.0000000006667E11);
        Konto kt02 = new Konto("Odlell", 120.009379);
        Konto kt03 = new Konto("Hoffmann", 3002);
        Konto kt04 = new Konto(3003);

        System.out.println("Kontoinhaber: ");
        kt01.getKontoInhaberOut();

    }
}
```

`Konto kt01...04` sind 4 Instanzen aus der Klasse `Konto`. Sie werden alle mit unterschiedlich vielen Parametern übergeben. `kt01` wird mit der Methode `getKontoInhaberOut()` ausgegeben.

```java
package ch.zzelav;

public class Konto {
    private String kontoInhaber;
    private String nameKonto;
    private int nummerKonto;
    private double saldoKonto;

    public Konto() {

    }

    public Konto(String kontoInhaber) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto = "---";
        this.nummerKonto = 0;
        this.saldoKonto = 0.0;
    }

    public Konto(int nummerKonto) {
        this.kontoInhaber = "---";
        this.nameKonto = "---";
        this.nummerKonto = nummerKonto;
        this.saldoKonto = 0.0;
    }

    public Konto(double saldoKonto) {
        this.kontoInhaber = "---";
        this.nameKonto  = "---";
        this.nummerKonto = 0;
        this.saldoKonto = saldoKonto;
    }

    public Konto(String kontoInhaber, String nameKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = 0;
        this.saldoKonto = 0.0;
    }

    public Konto(String kontoInhaber, int nummerKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = "---";
        this.nummerKonto = nummerKonto;
        this.saldoKonto = 0.0;
    }

    public Konto(String kontoInhaber, double saldoKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = "---";
        this.nummerKonto = 0;
        this.saldoKonto = saldoKonto;
    }

    public Konto(int nummerKonto, double saldoKonto) {
        this.kontoInhaber = "---";
        this.nameKonto  = "---";
        this.nummerKonto = nummerKonto;
        this.saldoKonto = saldoKonto;
    }

    public Konto(String kontoInhaber, String nameKonto, int nummerKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = nummerKonto;
        this.saldoKonto = 0.0;
    }

    public Konto(String kontoInhaber, String nameKonto, int nummerKonto, double saldoKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = nummerKonto;
        this.saldoKonto = saldoKonto;
    }

    public void setKontoInhaber(String kontoInhaber) {
        this.kontoInhaber = kontoInhaber;
    }

    public void setNameKonto(String nameKonto) {
        this.nameKonto = nameKonto;
    }

    public void setNummerKonto(int nummerKonto) {
        this.nummerKonto = nummerKonto;
    }

    public void setSaldoKonto(double saldoKonto) {
        this.saldoKonto = saldoKonto;
    }

    public String getKontoInhaber() {
        return kontoInhaber;
    }

    public String getNameKonto() {
        return nameKonto;
    }

    public int getNummerKonto() {
        return nummerKonto;
    }

    public double getSaldoKonto() {
        return saldoKonto;
    }

    private void ausgabe(String stringAusgabe) {
        System.out.println(stringAusgabe);
    }

    public String getKontoInhaberOut() {
        ausgabe(kontoInhaber);
        return kontoInhaber;
    }

    public String getNameKontoOut() {
        ausgabe(nameKonto);
        return nameKonto;
    }

    public int getNummerKontoOut() {
        ausgabe(nummerKonto);
        return nummerKonto;
    }

    public double getSaldoKontoOut() {
        ausgabe(saldoKonto);
        return saldoKonto;
    }

}
```

Die Methode `ausgabe()` gibt per `sysout` den Übergabeparameter aus. Die `get...Out()`-Methoden geben den Wert von der Methode `ausgabe()` und der Variable selber aus.

> ## UML 03

```plantuml
class App{
    + main(String[] args) : void
    - scanner : Scanner
    - instanzTestKonto : Konto
    - instanzTestKonto1 : Konto
    - kontoInhaber : String
    - kt01 : Konto
    - kt02 : Konto
    - kt03 : Konto
    - kt04 : Konto
}

class Konto{
    - kontoInhaber : String
    - nameKonto : String
    - nummerKonto : int
    - saldoKonto : double
    - {static} anzahlInstanzen : int
    + scanner : Scanner
    + Konto()
    + Konto(String kontoInhaber)
    + Konto(int nummerKonto)
    + Konto(double saldoKonto)
    + Konto(String kontoInhaber, String nameKonto)
    + Konto(String kontoInhaber, int nummerKonto)
    + Konto(String kontoInhaber, double saldoKonto)
    + Konto(int nummerKonto, double saldoKonto)
    + Konto(String kontoInhaber, String nameKonto, int nummerKonto)
    + Konto(String kontoInhaber, String nameKonto, int nummerKonto, double saldoKonto)
    + {static} ausgabeAnzahlInstanzen() : int
    + setKontoInhaber(String kontoInhaber) : void
    + setNameKonto(String nameKonto) : void
    + setNummerKonto(int nummerKonto) : void
    + setSaldoKonto(double saldoKonto) : void
    + getKontoInhaber() : String
    + getNameKonto() : String
    + getNummerKonto() : String
    + getSaldoKonto() : String
    - ausgabe : void
    + getKontoInhaberOut() : String
    + getNameKontoOut() : String
    + getNummerKontoOut() : String
    + getSaldoKontoOut() : String
    + kontoEingabe() : void
}
```

> ## Source Code 03

```java
package ch.zzelav;

import java.util.Scanner;

public class App
{
    public static void main( String[] args )
    {
        Scanner scanner = new Scanner(System.in);

        Konto instanzTestKonto = new Konto();
        Konto instanzTestKonto1 = new Konto();

        System.out.println("Kontoinhaber: ");
        String kontoInhaber = scanner.nextLine();
        instanzTestKonto.setKontoInhaber(kontoInhaber);

        System.out.println("Der Kontoinhaber wurde auf " + kontoInhaber + " gesetzt.");

        //instanzTestKonto1.nameKonto = "Sparkonto";
        //instanzTestKonto1.nummerKonto = 1;
        //instanzTestKonto1.saldoKonto = 1010.99;



        Konto kt01 = new Konto("Goldfinger", "Debitor", 3000, 1.0000000006667E11);
        Konto kt02 = new Konto("Odlell", 120.009379);
        Konto kt03 = new Konto("Hoffmann", 3002);
        Konto kt04 = new Konto(3003);

        System.out.println("Kontoinhaber: ");
        kt01.getKontoInhaberOut();
    }
}
```

```java
package ch.zzelav;

import java.util.Scanner;

public class Konto {
    private String kontoInhaber;
    private String nameKonto;
    private int nummerKonto;
    private double saldoKonto;
    private static int anzahlInstanzen;

    Scanner scanner = new Scanner(System.in);

    public Konto() {
        anzahlInstanzen += 1;
    }

    public Konto(String kontoInhaber) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto = "---";
        this.nummerKonto = 0;
        this.saldoKonto = 0.0;

        anzahlInstanzen += 1;
    }

    public Konto(int nummerKonto) {
        this.kontoInhaber = "---";
        this.nameKonto = "---";
        this.nummerKonto = nummerKonto;
        this.saldoKonto = 0.0;

        anzahlInstanzen += 1;
    }

    public Konto(double saldoKonto) {
        this.kontoInhaber = "---";
        this.nameKonto  = "---";
        this.nummerKonto = 0;
        this.saldoKonto = saldoKonto;

        anzahlInstanzen += 1;
    }

    public Konto(String kontoInhaber, String nameKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = 0;
        this.saldoKonto = 0.0;

        anzahlInstanzen += 1;
    }

    public Konto(String kontoInhaber, int nummerKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = "---";
        this.nummerKonto = nummerKonto;
        this.saldoKonto = 0.0;

        anzahlInstanzen += 1;
    }

    public Konto(String kontoInhaber, double saldoKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = "---";
        this.nummerKonto = 0;
        this.saldoKonto = saldoKonto;

        anzahlInstanzen += 1;
    }

    public Konto(int nummerKonto, double saldoKonto) {
        this.kontoInhaber = "---";
        this.nameKonto  = "---";
        this.nummerKonto = nummerKonto;
        this.saldoKonto = saldoKonto;

        anzahlInstanzen += 1;
    }

    public Konto(String kontoInhaber, String nameKonto, int nummerKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = nummerKonto;
        this.saldoKonto = 0.0;

        anzahlInstanzen += 1;
    }

    public Konto(String kontoInhaber, String nameKonto, int nummerKonto, double saldoKonto) {
        this.kontoInhaber = kontoInhaber;
        this.nameKonto  = nameKonto;
        this.nummerKonto = nummerKonto;
        this.saldoKonto = saldoKonto;

        anzahlInstanzen += 1;
    }

    public static int ausgabeAnzahlInstanzen() {
        return anzahlInstanzen;
    }

    public void setKontoInhaber(String kontoInhaber) {
        this.kontoInhaber = kontoInhaber;
    }

    public void setNameKonto(String nameKonto) {
        this.nameKonto = nameKonto;
    }

    public void setNummerKonto(int nummerKonto) {
        this.nummerKonto = nummerKonto;
    }

    public void setSaldoKonto(double saldoKonto) {
        this.saldoKonto = saldoKonto;
    }

    public String getKontoInhaber() {
        return kontoInhaber;
    }

    public String getNameKonto() {
        return nameKonto;
    }

    public int getNummerKonto() {
        return nummerKonto;
    }

    public double getSaldoKonto() {
        return saldoKonto;
    }

    public void ausgabe(String stringAusgabe) {
        System.out.println(stringAusgabe);
    }

    private void ausgabe(double stringAusgabe) {
        String temp = String.valueOf(stringAusgabe);
        System.out.println(temp);
    }

    public String getKontoInhaberOut() {
        ausgabe(kontoInhaber);
        return kontoInhaber;
    }

    public String getNameKontoOut() {
        ausgabe(nameKonto);
        return nameKonto;
    }

    public int getNummerKontoOut() {
        ausgabe(nummerKonto);
        return nummerKonto;
    }

    public double getSaldoKontoOut() {
        ausgabe(saldoKonto);
        return saldoKonto;
    }

    public void kontoEingabe() {
        System.out.println("-------------------------------");
        System.out.println("Kontoinhaber: ");
        kontoInhaber = scanner.nextLine();
        System.out.println("Kontoname: ");
        nameKonto = scanner.nextLine();
        System.out.println("Kontonummer: ");
        nummerKonto = Integer.parseInt(scanner.nextLine());
        System.out.println("Saldo: ");
        saldoKonto = Double.parseDouble(scanner.nextLine());
    }

}
```

`anzahlInstanzen` ist eine Variablen die die Instanzen zählt. Mit `ausgabeAnzahlInstanzen()` eird sie ausgegeben. `kontoEingabe()` Holt sich `kontoInhaber`, `nameKonto`, `nummerKonto` und `saldoKonto` mit einem Scanner.
