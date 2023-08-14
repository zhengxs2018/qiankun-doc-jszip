# 乾坤问题反馈

我们使用 docx-preview 模块预览 word 文档，但其内部使用了 jszip。在微应用模式下，无法预览，也不会报错，原因是 setImmediate 没有被执行。