import users from "./users.js";

// Задание 1 – Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => users.map((user) => user.name);
console.log(getUserNames(users));

// Задание 2 – Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue"));

// Задание 3 – Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);
console.log(getUsersWithGender(users, "male"));

// Задание 4 – Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => users.filter((user) => !user.isActivegi);
console.log(getInactiveUsers(users));

// Задание 5 – Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// Задание 6 – Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// Задание 7 – Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) =>
  users.reduce((total, balance) => total + balance.balance, 0);
console.log(calculateTotalBalance(users));

// Задание 8 – Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => {
      return user.friends.includes(friendName);
    })
    .map((user) => {
      return (user = user.name);
    });
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Задание 9 – Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const sortByActiveDays = (users) =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
console.log(sortByActiveDays(users));

// Задание 10 – Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) =>
  users.reduce((allTags, tweet) => {
    allTags.push(...tweet.skills);
    return allTags
      .filter((item, index) => allTags.indexOf(item) == index)
      .sort();
  }, []);

console.log(getSortedUniqueSkills(users));
