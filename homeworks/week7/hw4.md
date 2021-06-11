## 什麼是 DOM？
DOM (Document Object Model，文件物件模型)，是一個以 樹狀結構 來表示 HTML 文件的模型，而組合起來的樹狀圖，我們稱之為「DOM Tree」。我們把 HTML 每個 節點 的關係攤開來看，就好像是一棵樹一樣。
在 最根部的地方<html> ，就是 document，往下可以延伸出一個個的 HTML 標籤，一個節點就是一個標籤，往下又可以再延伸出 「文本節點」與「屬性的節點」。用來控制網頁的節點與內容的標準。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
簡單的說，這就是 事件在 DOM 裡面傳遞的順序，以及你可以對這些事件做什麼。
假設你有一個ul元素，底下有很多li，代表不同的 item。當你點擊任何一個li的時候，其實你也點擊了把他包著的ul，同時也點到了一層包一層的元素。
假如我在兩個元素上面都加了eventListener，到底哪一個會先執行？就是我們知道事件執行順序的重要性。
DOM 的事件在傳播時，會先從根節點<html>開始往下傳遞 到target你所點擊的那個目標 ，這邊你如果 加上事件 的話，就會處於CAPTURING_PHASE，捕獲階段。
target就是你所點擊的那個目標，這時候 在target身上所加的eventListenr 會是AT_TARGET，目標階段這一個 Phase。
最後，事件再往上 從子節點一路逆向傳回去根節點 ，這時候就叫做BUBBLING_PHASE冒泡階段。


## 什麼是 event delegation，為什麼我們需要它？
當事件發生時， event 物件可告訴你事件的相關資訊 ，和觸發時間的目標元件


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()
就是終止預設行為(Stop Event Flow)；以「超連結」為例，瀏覽器看到頁面上有超連結，只要偵測到超連結被點擊到，隨即會幫我做「導向連結」的動作，「導向連結」即是超連結的預設行為。

如下，我對hyper註冊了一個Click 事件，並且使用了event.preventDefault()，此時hyper就不再為我們進行導頁的動作，因為我們已經停止了他的預設行為。
<a id="hyper" href="https://dotblogs.com.tw/harry">Harry's Tech World</a>
<script type="text/javascript">

$("#hyper").click(function()
{
    //終止預設行為
    event.preventDefault();
});

</script>
event.stopPropagation()
這個比較難懂一點，這個語法是用來終止事件傳導，直接舉個例子來看比較好懂。
<div id="div1">
   <a id="hyper" href="https://dotblogs.com.tw/harry">Harry's Tech World</a>
</div>
<script type="text/javascript">

$("#hyper").click(function()
{
  //終止預設行為
  event.preventDefault();
  console.log("hyper click");
});

$("#div1").click(function()
{
  console.log("div1 click");
});
</script>
我們點擊超連結的時候，console 顯示訊息的順序為「hyper click」>「div1 click」，

這個結果很合理，原因是因為我們點擊超連結後browser先幫我們執行了hyper所註冊的Click 事件，

接著因為我們的hyper被包在div 裡面，進而div所註冊的事件就被「傳導」到了hyper上，

所以當我們點擊了hyper的同時不只自己本身的Click事件被觸發，連同div 所註冊的事件也會被觸發，這個結果就是所謂的事件傳導。

當然若我們不希望有這個結果，只要加入event.stopPropagation()就不會有事件傳導的結果囉