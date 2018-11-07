cls 

@rd /q/s tmp
@rd /q/s dist

rem SET curDir=$(get-location).path

docker run --rm -ti -v C:\Users\gelig\projects\feuerwehr-molsdorf:/myapp -p 4200:4200 -p 7020:7020 -p 7357:7357 danlynn/ember-cli:3.5.0-node_10.12 bash
