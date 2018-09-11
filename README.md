# react-test-mate

React项目零配置集成jest单元测试。


## 使用

### Install

```shell
yarn add --dev react-test-mate
```

如果React是15版本的话，还需要添加对应的`react-test-renderer`:


```shell
yarn add --dev enzyme-adapter-react-15 react-test-render@15
```

在**package.json**中添加命令:

```json
{
  "scripts": {
    "test": "test-mate",
    "cov": "test-mate --coverage"
  }
}
```

### 编写单元测试


```shell
__tests__/     # <-- 可将单元测试统一放在 __tests__ 目录下
src/
  Hello.js
  Hello.test.js    # <-- 也可以使用这种命令约定编写。
```


### 运行

```shell
yarn test
```

然后根据提示使用命令执行，比如使用`a`，则运行所有单元测式。

运行测试，且输出覆盖率。

```shell
yarn cov
```


## 其他问题

### alias

为了测试方便，可能需要配置模块的alias，此时可添加`.babelrc`文件。

```shell
yarn add --dev babel-plugin-module-resolver
```

```json
{
  "plugins": [
    ["module-resolver", {
      "alias": {
        "components": "./src/components"
      }
    }]
  ]
}
```

备注：为了不影响正常文件的编译，可以只针对测试环境下开启

```
{
  "env": {
    "test": {
      "plugins": [
        ["module-resolver", {
          "alias": {
            "components": "./src/components"
          }
        }]
      ]
    }
  }
}

```


### test url

默认的 testUrl 为 `http://localhost`，可以使用环境变量`TEST_URL`自定义。

可以在`package.json`中配置，也可以在命令行中指定环境变量：

```json
{
  "test": "TEST_URL=http://mytest.com test-mate"
}

```


### fixtures and supports

有时候需要一些测试帮助文件，或fixtures文件，可把这些文件放在

__tests__/supports 和 __tests__/fixtures 目录下，jest会忽略这两个目录，否则jest会发出警告，说在文件中找不到测试。


祝编码快乐！！
