import axios from 'axios';
import i18next from 'i18next';

export function api() {
  const token = JSON.parse(localStorage.getItem('TOKEN'));
  let lang_code;
  const { language } = i18next;
  if (language === 'uz') lang_code = 1;
  if (language === 'ru') lang_code = 2;
  if (language === 'en') lang_code = 3;
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API,
    headers: {
      lang_code,
      Authorization: `Bearer ${token}`,
    },
  });
}

export const getTeacherImage = (imgName) => {
  return import.meta.env.VITE_APP_API + '/teacher/avatar/' + imgName;
};

export const getEditorImage = (imgName) => {
  return import.meta.env.VITE_APP_API + '/news/picture/' + imgName;
};

