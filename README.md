# TS Example

https://github.com/sharo-jef/typescript-template の活用例です。

## Usage

1. このリポジトリを clone します。
   ```bash
   git clone https://github.com/sharo-jef/ts-example.git
   ```
1. ローカルリポジトリのディレクトリに移動します。
   ```bash
   cd ts-example
   ```
1. パッケージをインストールします。
   ```bash
   npm i
   ```

### Batch

```bash
npm run start:b
```

### Server

```bash
npm run start:s
```

````bash
curl localhost:3000
curl localhost:3000/<github.comのユーザ名>
```

### Build

```bash
npm run build
````

ビルド後の .js ファイルを実行したい場合は、以下のコマンドを実行する。

```bash
# Batch
node dist/batch.js

# Server
node dist/server.js
```
