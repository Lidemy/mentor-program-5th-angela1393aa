## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<option> : 作用為下拉列表中的一個選項
<select> : 作用為一個提供下拉列表選項的控制元素，與<option>一起使用。
<address> : 作用為提供某個人或某個組織（等等）的聯繫信息。

## 請問什麼是盒模型（box modal）
Box Model 主要由四個部分主成，由內而外分別是 Content ( 內容 )、Padding ( 內邊距 )、Border ( 邊框 ) 和 Margin ( 外邊距 )。
Border 和 Margin 都有相同定義寬度的撰寫語法，撰寫的方法可分為下列幾種，單位可以設定為像素 px、百分比 % 或 em、rem 等。
四個值：上-top、右-right、下-bottom、左-left
三個值：上、左右、下
兩個值：上下、左右
一個值：上下左右
border-radius:左上右下、右上左下;
要特別注意:
Margin邊框之外空白的距離
如果是 inline 元素，margin 的垂直方向 ( 上、下 ) 沒有效果。
Border邊框
會受到 box-sizing 影響 ( 設定 border-box 時表示邊框包含在寬度內 )。
Padding元素跟邊框的距離
會受到 box-sizing 影響 ( 設定 border-box 時表示內邊距包含在寬度內 )。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
每一個html標籤元素都會有一個預設的display屬性，標籤基本上大部分可分為兩種顯示模式，一種是行內元素(inline)，另一種為區塊元素(block)，我們可以在CSS內加入display來賦予新的屬性，以改變其原本特性，利用它來呈現我們想要的排版。

Block區塊元素標籤：div、ul、li、p、h1
．元素寬度預設會撐到最大，使其占滿整個容器
．可以設定長寬/margin/padding，但仍會占滿一整行

Inline行內元素標籤：span、a、imput、img、td
．元素可在同一行內呈現，圖片或文字均不換行，也不會影響其版面配置
．不可設定長寬，元素的寬高由它的內容撐開
．inline裡面不能放block
．常聽到行內元素不能設定上下margin/padding，但並非不能設定，是排版不會隨著設定改變，字仍在行內，其他行並不會被推開。可以在css加入display:block;就可以設定上下margin/padding了


inline-block行內區塊
．以inline的方式呈現，但同時擁有block的屬性
．可設定元素的寬高/margin/padding
．可水平排列

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
position: static;靜態位置
依照原始碼的排列順序定位

position: relative;相對位置
設定top、bottom、right、left 屬性， 會使其元素「相對地」調整其原本該出現的所在位置，都不會影響到原本其他元素所在的位置。

position: absolute;絕對定位
如果父元素是static的話則以body定位;如果父元素是relative則以父元素定位

 position: fixed;固定位置
捲動卷軸時不會移動