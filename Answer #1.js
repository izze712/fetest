function solution(record) {
    var temp = [];
    var user = [];
    record.forEach(function(val) {
        var sp = val.split(" ");
        var act = sp[0];
        var id = sp[1];
        var name = "";
        var changeUserName = function(user, id, name, data) {
            user[id] = name;
            data.forEach(function(tval, key) {
                if (tval.id == id) {
                    data[key].msg = (data[key].msg).replace(/\w+/, name);
                }
            });

            return data;
        }

        if (act == "Enter") {
            name = sp[2];
            temp = changeUserName(user, id, name, temp);
            temp.push({id: id, msg: name + " came in."})
        } else if (act == "Leave") {
            name = user[id];
            temp.push({id: id, msg: name + " has left."})
        } else if (act == "Change") {
            name = sp[2];
            temp = changeUserName(user, id, name, temp);
        }
    })

    var answer = [];
    temp.forEach(val => answer.push(val.msg));
    return answer;
}
