Пояснение по ошибке:
![[20240605175653.png]]()

Решил переходить на новый формат json-файла, где в центре будет пользователь, для которого уже будут перечислены системы и роли в них:

```
{
  "jsondata":[
    {
      "id":1, "name":"Иванов Иван Иванович",
      "system":[
        { "id":1, "name":"Система 1",
          "role":[
            {"id":1, "name":"Администратор","value":1},
            {"id":2, "name":"Пользователь","value":0},
            {"id":3, "name":"Гость","value":0}
          ]},
        { "id":2, "name":"Система 2",
          "role":[
            {"id":1, "name":"Бухгалтер","value":1},
            {"id":2, "name":"Менеджер","value":0},
            {"id":3, "name":"Аудитор","value":1}
          ]}
      ]
    },
    {
      "id":2, "name":"Петров Петр Петрович",
      "system":[
        { "id":1, "name":"Система 1",
          "role":[
            {"id":1, "name":"Администратор","value":1},
            {"id":2, "name":"Пользователь","value":0},
            {"id":3, "name":"Гость","value":0}
          ]},
        { "id":2, "name":"Система 2",
          "role":[
            {"id":1, "name":"Бухгалтер","value":1},
            {"id":2, "name":"Менеджер","value":0},
            {"id":3, "name":"Аудитор","value":1}
          ]}
      ]
    }
  ]
}
```

Данный подход более удобен поскольку пользователи добавляются/изменяются/удаляются куда чаще чем системы, так что удобно держать всю информацию о пользователе в одном месте.
