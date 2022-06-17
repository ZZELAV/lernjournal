# Docker

## Docker Images anzeigen

```cmd
docker images
```

## docker build

```cmd
docker build -t docker-own-whale .
```

- `build`: neues Image erstellen
- `-t [NAME]`: Image benennen
- `.`: Wo liegt das Dockerfile (. = in diesem Directory)

## Laufende Container anzeigen

```cmd
docker ps
```

## docker run

```docker
docker run -i -p 8888:80 inauendemo:v1
```

- `RUN` - Für den Container aus
- `-i` - Interaktiv, ist es ein Konsolen-Programm, kann in dieser Konsole der Output gesehen werden
- `-p` - Definiert den Port, der erste Teil ist der Port des Hosts's und der zweite Teil der Port des Containers.