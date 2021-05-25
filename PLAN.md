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

      - Generate beginning coordinate playerPickCoordinate()
      - Option: have a space checker, for each generated coordinate. restarts if coordinate has space occupied.

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

## GAMELOOP

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

## AI

        Process:

        # Player picks coordinate to attack

        # AI
          - BEGINNER AI
            - Computer selects random spaces
            - Generate 2 random numbers, each between 0 and 9
            - If coordinate has been already hit, try another until not hit
          - ADVANCED AI
            - If there is a hit, computer tries adjacent tiles
            - If there is a second hit, and a "direction" is defined, computer continues line on one side.
            - If no hit on that side, computer tries other side


        */
