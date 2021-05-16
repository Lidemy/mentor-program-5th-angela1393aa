## 請以自己的話解釋 API 是什麼
應用程式介面（英語：Application Programming Interface），縮寫為API，是一種介面，透過api可以讓雙方資料交換。 就是當你要跟他要資料時，要透過他提供的 API 跟他要東西，或假設你是提供資料的一方，那你當然不希望他人來直接存取你的資料庫，所以你提供 API 給他，讓他來存取你的資料，那在這個介面你就可以定義那些資料可以給他，那些東西不給他，你就可以把控這部分。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
201 Created：請求成功且新的資源成功被創建，通常用於 POST 或一些 PUT 請求後的回應。
400 Bad Request：此回應意味伺服器因為收到無效語法，而無法理解請求。 
403 Forbidden：用戶端並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://angela1393aa-restaurants.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 獲取單一餐廳 | GET    | /restaurants/:id | 無                    | /restaurants/10      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restaurants/:id     | name: 餐廳名 | 無              |
