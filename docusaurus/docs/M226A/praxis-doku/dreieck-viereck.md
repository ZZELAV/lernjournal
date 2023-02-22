# Dreieck & Viereck

> ## Source Code

```java
package ch.zzelav;

public class App {
    public static void main(String[] args) {

        Point punktA = new Point(-100, 100);
        Point punktB = new Point(53, -7);
        Point punktC = new Point(38, -99);
        Point punktD = new Point(-54, 87);

        Dreieck d1 = new Dreieck(punktA, punktB, punktC);
        Viereck v1 = new Viereck(punktA, punktB, punktC, punktD);
    }
}
```

`Point ... = new Point(...);` erzeugt neue Objekte mit jeweils 2 Parametern. Das Erzeugen der Objekte wird mithilfe eines Konstruktors gemacht. `Dreieck d1 = new Dreieck(punktA, punktB, punktC);` und `Viereck v1 = new Viereck(punktA, punktB, punktC, punktD);` setzt die Punkte zu einem Dreieck und Viereck zusammen.

```java
package ch.zzelav;

public class Point {
    private double xCoor;
    private double yCoor;

    public Point(double x, double y) {
        if(x >= -100 && x <= 100) {
            xCoor = x;
        }
        else {
            System.out.println("Ungültige Koordinate (x): " + x);
        }

        if(y >= -100 && y <= 100) {
            yCoor = y;
        }
        else {
            System.out.println("Ungültige Koordinate (y): " + y);
        }
    }

    public void addToXCoor(int xCoor) {
        xCoor += this.xCoor;
    }

    public void addToYCoor(int yCoor) {
        yCoor += this.yCoor;
    }

    public void setXCoor(double xCoor) {
        this.xCoor = xCoor;
    }

    public void setYCoor(double yCoor) {
        this.yCoor = yCoor;
    }

    public void setPoint(double x, double y) {
        if(x >= -100 && x <= 100) {
            xCoor = x;
        }
        else {
            System.out.println("Ungültige Koordinate (x): " + x);
        }

        if(y >= -100 && y <= 100) {
            yCoor = y;
        }
        else {
            System.out.println("Ungültige Koordinate (y): " + y);
        }
    }

    public double getXCoor() {
        return this.xCoor;
    }

    public double getYCoor() {
        return this.yCoor;
    }

    public String getPoint() {
        return xCoor + ", " + yCoor;
    }

}
```

`public Point(double x, double y)` ist der Konstruktor. Er kann 2 doubles aufnehmen und diese werden in `xCoor` und `yCoor` gespeichert. `public void addToXCoor(int xCoor)` und `public void addToYCoor(int yCoor)` rechnet den alten und den neuen Wert zusammen und speichert ihn in `xCoor`/`yCoor`. `public void setXCoor(double xCoor)` und `public void setYCoor(double yCoor)` setzen den Wert von `xCoor`/`yCoor`. Die Funktion `public void setPoint(double x, double y)` setzt beide Koordinaten, wie der Konstruktor. `public double getXCoor()` gibt den Wert von `xCoor` zurück und `public double getYCoor()` den Wert von `yCoor`. Die letze Funktion `public String getPoint()` fügt beide Koordinaten zusammen und gibt diese als String aus. Beim Konstruktor und `setPoint` wird überprüft ob die Koordinaten kleiner -100 und grösser 100 sind. Ist das der Fall wird eine Fehlermeldung ausgegeben und die Koordinate wird nicht gespeichert.

```java
package ch.zzelav;

public class Dreieck {

    private Point a;
    private Point b;
    private Point c;

    public Dreieck(Point pA, Point pB, Point pC) {
        a = pA;
        b = pB;
        c = pC;
    }

    public boolean verify() {
        if (a != null || b != null || c != null) {
            return true;
        }
        else {
            return false;
        }
    }

    public void setA(Point a) {
        this.a = a;
    }

    public void setB(Point b) {
        this.b = b;
    }

    public void setC(Point c) {
        this.c = c;
    }

    public Point getA() {
        return a;
    }

    public Point getB() {
        return b;
    }

    public Point getC() {
        return c;
    }
}
```

```java
package ch.zzelav;

public class Viereck {

    private Point a;
    private Point b;
    private Point c;
    private Point d;

    public Viereck(Point pA, Point pB, Point pC, Point pD) {
        a = pA;
        b = pB;
        c = pC;
        d = pD;
    }

    public boolean verify() {
        if (a != null || b != null || c != null || d != null) {
            return true;
        }
        else {
            return false;
        }
    }

    public void setA(Point a) {
        this.a = a;
    }

    public void setB(Point b) {
        this.b = b;
    }

    public void setC(Point c) {
        this.c = c;
    }

    public void setD(Point d) {
        this.d = d;
    }

    public Point getA() {
        return a;
    }

    public Point getB() {
        return b;
    }

    public Point getC() {
        return c;
    }

    public Point getD() {
        return d;
    }
}
```

Die Konstruktor `Dreieck` und `Viereck` hat drei/vier Übergabeparameter. Die Funktion `verify()` überprüft, ob die Punkte nicht `NULL` sind.
