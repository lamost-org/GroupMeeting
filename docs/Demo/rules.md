# Markdown 语法

## 什么是 Markdown?

`Markdown` 是一种文本格式。你可以用它来控制文档的显示。使用 markdown，你可以创建粗体的文字，斜体的文字，添加图片，并且创建列表等等。基本上来讲，Markdown 就是普通的文字加上 `#` 或者 `*` 等符号。

## 标题

```markdown
# 这是 <h1> 一级标题

## 这是 <h2> 二级标题

### 这是 <h3> 三级标题

#### 这是 <h4> 四级标题

##### 这是 <h5> 五级标题

###### 这是 <h6> 六级标题
```

## 强调

```markdown
*这会是 斜体 的文字*
```
_这会是 斜体 的文字_

```markdown
**这会是 粗体 的文字**
```
__这会是 粗体 的文字__

```markdown
_你也可以 **组合** 这些符号_
```
_你也可以 **组合** 这些符号_

```markdown
~~这个文字将会被横线删除~~
```
~~这个文字将会被横线删除~~

## 无序列表

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

## 有序列表

```markdown
1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b
```

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

## 插入图片

用法：
- `![](./figure/lamost.jpg)`  或
- `![lamost](./figure/lamost.jpg)`

效果：

![lamost](./figure/lamost.jpg)

**注意：**

- `[]` 里的内容只是针对图片的说明，可选择加或不加。
- `()` 可以用
  - 相对路径 (可以与 `.md` 文档同一级目录，也可以自己新建文件夹，但要保证路径写正确)
  - 绝对路径，只可以写绝对的网络 URL 位置，比如: 
  
`![](https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)`


## 链接

```markdown
https://github.com/ - 自动生成！
[GitHub](https://github.com)
```

https://github.com/

[GitHub](https://github.com)

## 引用

```markdown
正如 Kanye West 所说：

> We're living the future so
> the present is our past.
```

正如 Kanye West 所说：

> We're living the future so
> the present is our past.
## 分割线

```markdown
如下，三个或者更多的

---

连字符

---

星号

---

下划线
```

## 行内代码

```markdown
我觉得你应该在这里使用 `import numpy` 才对。
```

我觉得你应该在这里使用 `import numpy` 才对。

## 代码块语法高亮

你可以在你的代码上面和下面添加 ` ``` ` 来表示代码块。

你可以给你的代码块添加任何一种语言的语法高亮



例如，给 python 代码添加语法高亮：

```
​```python
import numpy
import math

a = np.ones(1, 2)
b = math.sqrt(4)
​```
```

会得到下面的效果：

```python
import numpy
import math

a = np.ones(1, 2)
b = math.sqrt(4)
```

## 表格

```markdown
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


## Git Emoji

[Git Emoji 大全](https://gist.github.com/rxaviers/7360908)

```
:smile:
:rocket:
```

:smile:
:rocket:

## 脚注

```markdown
Content [^1]

[^1]: Hi! This is a footnote
```

## 数学

默认下的分隔符：

- `$...$` 或者中的数学表达式将会在行内显示。
- `$$...$$`中的数学表达式将会在块内显示。

行内公式 `$f_a(x) = \mu x + \sigma$`，$f_a(x) = \mu x + \sigma$

行间公式 `$$\sum_{n=1}^{N}{n^2+1}$$`

$$\sum_{n=1}^{N}{n^2+1}$$
