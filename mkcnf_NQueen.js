let fs = require('fs');

let tmp = 2;
while (process.argv[tmp]) {
    let n = parseInt(process.argv[tmp++]);
    let data = 'p cnf ' + n*n + ' ';
    let count = 0;
    let fileName = 'cnf/' + n + '-queen.cnf';
    let cnf = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            cnf += ((i-1)*n + j) + ' ';
        }
        cnf += '0\n';
        count++;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            cnf += ((j-1)*n + i) + ' ';
        }
        cnf += '0\n';
        count++;
    }

    let k = 1;
    while (k < n * n) {
        // right
        let r = 0;
        while ((k + r) % n !== 0) {
            cnf += '-' + k + ' -' + (k+ ++r) + ' 0\n';
            count++;
        }
        // left down
        let ld = 0;
        while ((k + (n-1)*ld - 1) % n !== 0 && k + (n-1)*ld <= n*(n-1)) {
            cnf += '-' + k + ' -' + (k + (n-1) * ++ld) + ' 0\n';
            count++;
        }
        // down
        let d = 0;
        while (k + n*d <= n*(n-1)) {
            cnf += '-' + k + ' -' + (k + n * ++d) + ' 0\n';
            count++;
        }
        // right down
        let rd = 0;
        while ((k + (n+1)*rd) % n !== 0 && k + (n+1)*rd <= n*(n-1)) {
            cnf += '-' + k + ' -' + (k + (n+1) * ++rd) + ' 0\n';
            count++;
        }
        k++;
    }

    data += count + '\n';
    let prog = data + cnf;

    fs.writeFile(fileName, prog, err => {
    });
}
