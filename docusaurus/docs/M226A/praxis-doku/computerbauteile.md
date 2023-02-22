# Computerbauteile

> ## Source Code

```java
public class App {
    public static void main(String[] args) throws Exception {
        Disk disk01 = new Disk();
        Disk disk02 = new Disk();
        Disk disk03 = new Disk();

        PC pc01 = new PC(disk01);
        PC pc02 = new PC(disk02);

        pc02.diskWechseln(disk01);
        pc02.diskWechseln(disk03);

        System.out.println(disk01.getStatus());
        System.out.println(disk02.getStatus());
        System.out.println(disk03.getStatus());
    }
}
```

```java
public class Disk {
    private boolean eingebaut = false;

    public void einbau() {
        if(!eingebaut) {
            eingebaut = true;
            System.out.println("Festplatte wurde erfolgreich eingebaut.");
        } else {
            System.out.println("FEHLER: Festplatte ist bereits eingebaut.");
        }
    }

    public void ausbau() {
        if(eingebaut) {
            eingebaut = false;
            System.out.println("Festplatte wurde erfolgreich ausgebaut.");
        } else {
            System.out.println("FEHLER: Festplatte ist noch nicht eingbaut.");
        }
    }

    public boolean getStatus() {
        return eingebaut;
    }

}
```

```java
public class PC {
    private Disk verweisAufDisk;

    public void diskWechseln(Disk aDisk) {
        verweisAufDisk.ausbau();
        verweisAufDisk = aDisk;
        verweisAufDisk.einbau();
    }

    public PC(Disk vaufDisk) {
        vaufDisk.einbau();
        verweisAufDisk = vaufDisk;
    }

}
```
