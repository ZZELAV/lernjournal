# List, Set & Map

> ## ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();

        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        System.out.println(cars);

        cars.get(0);
        cars.set(0, "Opel");
        cars.remove(0);
        cars.clear();
        cars.size();
    }
}
```

> ## LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> cars = new LinkedList<String>();

        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        System.out.println(cars);

        cars.addFirst("Porsche");
        cars.addLast("Porsche");
        cars.removeFirst();
        cars.removeLast();
        cars.getFirst();
        cars.getLast();
    }
}
```

> ## HashSet

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> cars = new HashSet<String>();

        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("BMW");
        cars.add("Mazda");
        System.out.println(cars);

        cars.contains("Mazda");
        cars.remove("Volvo");
        cars.clear();
        cars.size();
    }
}

```

> ## HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> capitalCities = new HashMap<String, String>();

        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        capitalCities.put("Norway", "Oslo");
        capitalCities.put("USA", "Washington DC");
        System.out.println(capitalCities);

        capitalCities.get("England");
        capitalCities.remove("England");
        capitalCities.clear();
        capitalCities.size();
    }
}
```
