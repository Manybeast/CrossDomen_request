#Фрукты:
получение списка:
тип - GET
url - fruites
ответ - массив елементов

#Добавление елемента:
тип - POST
url - fruites
body - {
    fruite: новый елемент
}
ответ - массив елементов

#Редактирование елемента:
тип - PUT
url - fruites/id елемента для редактирования
body - {
    fruite: новый елемент
}
ответ - массив елементов

#Удаление елемента:
тип - DELETE
url - fruites/id елемента для редактирования
body - {
    fruite: новый елемент
}
ответ - массив елементов



#Калькулятор:
Все запросы пост на /calc/
#Для умножения:
тип POST
url - "mul"
боди - "{
    a: операнд а,
    b: операнд b
}"

#Для деления:
тип POST
url - "div"
боди - "{
    a: операнд а,
    b: операнд b
}"

#Для сложения:
тип POST
url - "sum"
боди - "{
    a: операнд а,
    b: операнд b
}"

#Для вычитания:
тип POST
url - "dif"
боди - "{
    a: операнд а,
    b: операнд b
}"

в ответ приходит результат вычисления.

#Для комментариев
#Комментарии:
получение списка:
тип - GET
url - comment
ответ - массив елементов

#Добавление елемента:
тип - POST
url - comment
body - {
    "author": "Test Jones",
    "text": "youText"
}
ответ - массив елементов

#Редактирование елемента:
тип - PUT
url - comment/:id елемента для редактирования
body - {
    "author": "Test Jones",
    "text": "yourText"
}
ответ - массив елементов

#Удаление елемента:
тип - PUT
url - comment/:id елемента для редактирования
ответ - массив елементов

