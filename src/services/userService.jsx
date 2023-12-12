// userService.js
const BASE_URL = 'http://localhost:3001/api/users';

const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    // Преобразование данных в нужный формат
    const formattedUsers = data.map(user => ({
      id: user._id,
      title: user.name,
      text: user.age,
      img: user.imageURL, // Предполагается, что у вас есть поле imageURL в вашей модели
    }));
console.log({getUsers})
    return formattedUsers;
  } catch (error) {
    console.error('Ошибка при получении данных о пользователях:', error);
    throw error;
  }
};

export const userService = {
  getUsers,
  };
