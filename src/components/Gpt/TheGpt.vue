<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Система</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in jsondata" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>
            <ul>
              <li v-for="system in item.system" :key="system.id">
                <p>{{ system.name }}</p>
                <ul>
                  <li v-for="role in system.role" :key="role.id">
                    {{ role.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsondata: [
        {
          id: 1,
          name: "Иванов Иван Иванович",
          system: [
            {
              id: 1,
              name: "Система 1",
              role: [
                { id: 1, name: "Администратор", value: 1 },
                { id: 2, name: "Пользователь", value: 0 },
                { id: 3, name: "Гость", value: 0 },
              ],
            },
            {
              id: 2,
              name: "Система 2",
              role: [
                { id: 1, name: "Бухгалтер", value: 1 },
                { id: 2, name: "Менеджер", value: 0 },
                { id: 3, name: "Аудитор", value: 1 },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Петров Петр Петрович",
          system: [
            {
              id: 1,
              name: "Система 1",
              role: [
                { id: 1, name: "Администратор", value: 1 },
                { id: 2, name: "Пользователь", value: 0 },
                { id: 3, name: "Гость", value: 0 },
              ],
            },
            {
              id: 2,
              name: "Система 2",
              role: [
                { id: 1, name: "Бухгалтер", value: 1 },
                { id: 2, name: "Менеджер", value: 0 },
                { id: 3, name: "Аудитор", value: 1 },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
