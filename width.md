# Window.innerWidth

窗口的内部宽度；是窗口的 layout viewport 的宽度；包含滚动条宽度；
若获取文档宽度（一般也是除去滚动条和边框的窗口宽度）使用 document.documentElement.clientWidth;

# Element.clientWidth

元素内部宽度：width+padding; 内联元素返回 0；
不包含外边距 margin，不包含边框 border,不包含滚动条宽度，会返回一个四舍五入整数值；
若是需要小数值可以使用 element.getBoundingClientRect();

# Element.scrollWidth

元素内容宽度：width+padding+overflow 溢出不可见的内容（overflow:auto|hidden）; 还包含伪类元素跨度::before,::after;
宽度>=clientWidth;
内联元素返回 0；不包含外边距 margin，不包含边框 border,不包含滚动条宽度，会返回一个四舍五入整数值；
若是需要小数值可以使用 element.getBoundingClientRect();

# HTMLElement.offsetWidth

元素布局宽度：width+padding+border+scrollbar;不区分是和内联元素；会返回一个四舍五入整数值；
若是需要小数值可以使用 element.getBoundingClientRect();
