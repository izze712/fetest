function solution(N, users) {
    var fail = [];
    var play = [];
    users.forEach(function(val) {
        for (var i = 0;i < val && i < N;i++) {
            play[i] = !!play[i] ? play[i] + 1 : 1;
            
        }

        val = val - 1;
        if (val < N) fail[val] = !!fail[val] ? fail[val] + 1 : 1;
    })

    var temp = [];
    for (var i = 0;i < N;i++) {
        var failTotal = fail[i] || 0;
        temp.push({key: i + 1, value: !!play[i] ? failTotal/play[i] : 0});
    }

    var answer = [];
    answer = temp.sort((a, b) => { return a.value < b.value || (a.value == b.value && a.key > b.key) ||-1 }).map(a => a.key);
    return answer;
}
