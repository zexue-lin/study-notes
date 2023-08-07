## 笔记
### Laravel中 的中间件 和 验证器
![img_1.png](img_1.png)
### dd()和dump()
1. dd() 函数用于输出变量的值并终止程序执行。它会在输出变量值的同时停止脚本的执行，也就是说，在调用 dd() 后，后续的代码将不会执行。这在调试过程中非常有用，因为它可以让你查看变量的值，检查问题，并确保代码执行到特定位置。
2. dump() 函数用于输出变量的值，但不会停止程序执行。它会将变量的值打印到页面上，并继续执行后续代码。这个函数在调试时通常用于查看变量的内容，而不影响代码的正常执行流程。

### 函数前的反引号\
![img_2.png](img_2.png)

## 控制器的创建
1. `php artisan make:controller DemoController` 普通控制器
2. `php artisan make:controller ProvisionServer --invokable`单行为控制器 (单行为控制器（Single Action Controller）是一种特殊类型的控制器，它只包含一个方法来处理一个特定的 HTTP 请求。这种控制器通常用于简单的操作，特别是当你只需要处理一个简单的动作而不需要其他方法时。)
3. `php artisan make:controller ResourceController --resource`包含了index、create、store、show、edit、update、destroy 等方法。
4. `php artisan make:controller ApiController --api`快速生成不包含 create 和 edit 方法的用于开发接口的资源控制器。

## .env环境变量文件
![img_3.png](img_3.png)
