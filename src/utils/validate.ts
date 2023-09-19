// Валидация имени (обязательное поле)
export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return "Поле 'Имя' должно быть обязательно заполнено.";
  }
  return null;
};

// Валидация компании (обязательное поле)
export const validateCompany = (company: string): string | null => {
  if (!company.trim()) {
    return "Поле 'Компания' должно быть обязательно заполнено.";
  }
  return null;
};

// Валидация телефона (обязательное поле, формат +7-123-456-78-90)
export const validatePhone = (phone: string): string | null => {
  const phonePattern = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/;
  if (!phone.trim()) {
    return "Поле 'Телефон' должно быть заполнено.";
  }
  if (!phonePattern.test(phone)) {
    return "Поле 'Телефон' должно быть вида +7-123-456-78-90.";
  }
  return null;
};

// Валидация email (обязательное поле, формат email)
export const validateEmail = (email: string): string | null => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.trim()) {
    return "Поле 'Email' должно быть заполнено.";
  }
  if (!emailPattern.test(email)) {
    return "Поле 'Email' должно быть в формате email.";
  }
  return null;
};

// Валидация сообщения (обязательное поле, если файл не заполнен)
export const validateMessage = (message: string, file: File | null): string | null => {
  if (!message.trim() && !file) {
    return "Поле 'Сообщение' должно быть обязательно заполнено, если файл не загружен.";
  }
  return null;
};

// Валидация файла (обязательное поле, если сообщение не заполнено, и файл должен быть формата .docx)
export const validateFile = (file: File | null, message: string): string | null => {
  if (!file && !message.trim()) {
    return "Поле 'Файл' должно быть обязательно заполнено, если сообщение не заполнено.";
  }
  if (file && !file.name.endsWith(".docx")) {
    return "Файл должен быть формата .docx.";
  }
  return null;
};
