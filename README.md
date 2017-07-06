# n-queen

「n-クイーン」パズルが解を持つかどうか調べるプログラムです．
環境はnode v6.5.0です．

次のように入力すると，n-クイーンパズルの解を出力します．
解が存在しない場合は`UNSAT`と出力されます．

```
$ node NQueen.js [n]
```

## CNFファイルの生成

[minisat](https://github.com/niklasso/minisat)を使って問題を解く場合は，
次のように入力すると，CNFファイルを生成してくれます．

```
$ node mkcnf_NQueen.js [n1] [n2] ...
```
