# Logic

Create a ship

- has propertires length, hits, sunk
  - length
    - hitpoints = length
  - positions
    - array of ship positions on map [1,3]
  - hit function, marks position as hit
    - hit() = --hitpoints
    -
  - isSunk - if hitpoint == 0, true. - board.totalships -= 1
    Create a board
- create board pieces

  - board properties

    - PLACE SHIP ON BOARD

      - Horizontal or Vertical
      - shipFactory(x,y)
        - check if valid location (not outside board)
          - maxWidth/10/ - x/coordinate/ = available spaces
            - if (available spaces < ship.data.length) {invalid location}
            - else {place ship}
      - Ship placing
        - shipUnits = filterShipUnits();
          - function filterShipUnits() =
            - row = boardUnits.filter(unit => {
              return unit.coordinate[0] == x)
            - for (i = y; i < ship.data.length; i++) {
              row.filter(unit => {
              return unit.coordinate[1] == i
              })}
        - shipUnits.forEach
          - ship.data.hasShip = true
          - ship.data.whichShip = shipCounter
      - shipCounter ++

    - CHECK SUNK

      - shipCounter = player1Ships.filter(ship => {!ship.data.isSunk})

    - RECEIVE ATTACK

      - receiveAttack(i,j): locates unit, marks it as hit
        - selectedUnit = allUnits.filter(unit => {
          unit.data.coordinate[0] == x && unit.data.coordinte[1] == y
        - selectedUnit.isHit = true
        - function checkForShip(){
          if (selectedUnit.hasShip) {
          allShips[selected.unit.whichShip].data.hit()
          checkSunk();
          }

    - BOARDUNIT LOOP
      - each boardUnit has:
        - coordinate (i,j)
        - isHit: true false
        - hasShip: true false
        - whichShip: anyNumber
        - if (ship == true) {paint red} else {put dot}
      - Loop (Row) for (let i=0;i<=10;i++) {
        loop (column) for (let j=0; j<=10,j++) {
        unit.coordinate = [i,j]
        }
        }

GAMELOOP

\*\* Consider where board creation is done

1. Creates Board
2. Creates 2 Players
3. Create Ships Player.addShips x 5
4. Place Ships
   LOOP
   1. Create function for generating a starter coordinate
      starterPlay = board.spaceChecker(player.pickCoordinate)
      // Next = loop runs function until true.
      May be while (starterPlay != false) or something
   1. If (starterPlay == false)
   1. board.spaceChecker(coordinate)
   1. If false,
