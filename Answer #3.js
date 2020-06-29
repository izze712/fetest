function solution(relation) {
    var answer = 0;
    var firstRow = relation[0];
    var candidateColumn = [];
    for (var column = 0; column < firstRow.length; column++) {
        var isCandidate = true;

        checkVertical:
        for (var row = 0; row < relation.length; row++) {
            var value = "";
            candidateColumn.forEach(index => value += relation[row][index]);
            value += relation[row][column];

            var rowCompare = row;
            do {
                if (row != rowCompare) {
                    var nextValue = "";
                    candidateColumn.forEach(index => nextValue += relation[rowCompare][index])
                    nextValue += relation[rowCompare][column];

                    if (value == nextValue) {
                        isCandidate = false;
                        break checkVertical;
                    }
                }

                rowCompare++;
                if (rowCompare >= relation.length) rowCompare = 0;
            } while (rowCompare != row)
        }

        if (isCandidate) answer++, candidateColumn = [];
        else candidateColumn.push(column);
    }

    return answer;
}
