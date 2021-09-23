var lenght = 8
var chessboard = ""
for (var line = 1; line <= lenght; line = line + 1) {
    if (line % 2 == "0") {
        for (var pos = 1; pos <= lenght; pos = pos + 1) {
            var evenOdd = (pos % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessboard = chessboard + "#");
                    break;
                case false:
                    (chessboard += " ");
                    break;
            }
        }
    } else {
        for (var pos = 1; pos <= lenght; pos = pos + 1) {
            var evenOdd = (pos % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessboard = chessboard + " ");
                    break;
                case false:
                    (chessboard += "#");
                    break;
            }
        }

    }
    chessboard = chessboard + "\n";

}
console.log(chessboard);