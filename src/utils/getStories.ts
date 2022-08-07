const baseUrl = 'https://flynn.boolean.careers/exercises/api/boolgram';

export const getStories = async () => {
  const response = await fetch(`${baseUrl}/profiles`);
  const data = await response.json();
  return data;
};
