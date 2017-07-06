(() => {
    let fs = require('fs');
    if (process.argv[2] === undefined) return;
    let n = parseInt(process.argv[2]);

    let arr = [];
    let check = () => {
        let last = arr.length-1;
        let k = 0;
        while (k < last) {
            if (last - k === arr[last] - arr[k] || last - k === arr[k] - arr[last])
                return false;
            k++;
        }
        return true;
    };

    let solve = (k = 0) => {
        for (let i = 0; i < n; i++) {
            if (arr.indexOf(i) >= 0)
                continue;

            arr.push(i);
            let res = check();

            if (res) {
                if (k === n - 1)
                    return res;
                else {
                    let next = solve(k + 1);
                    if (next)
                        return next;
                }
            }

            arr.pop();
        }
        return false;
    };

    let start = new Date().getTime();
    let result = solve();
    let end = new Date().getTime();
    console.log(n + '-queen: ' + (end - start) + 'ms');
    if (result) {
        let board = ''
        for (let i = 0; i < arr.length; i++) {
            let a = [];
            for (let j = 0; j < arr.length; j++) {
                a[j] = 0;
            }
            a[arr[i]] = 1;
            board += a.join(' ');
            if (i !== arr.length - 1)
                board += '\n';
        }
        console.log(board);
    } else {
        console.log('UNSAT');
    }
})();
