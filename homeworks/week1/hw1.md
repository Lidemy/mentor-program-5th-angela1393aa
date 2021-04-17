## 交作業流程

新開一個 branch：git branch week1
切換到 branch： git checkout week1
寫作業
提交：git commit -am"finished week1"
推到 GitHub：git push origin week1

到自己的 repo 去，並且發起 PR（Pull Request）
把 PR 的連結複製起來，並且在學習系統上繳交作業
等作業改完並且 merge 以後：

切換到 master：git checkout master
把最新的改動拉下來：git pull origin master
刪除已經 merge 的 branch：git branch -d week1