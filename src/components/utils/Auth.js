export const isAuthenticated = () =>
  surveyData.filter((week) => week.week === surveyWeek);

export const getJwt = () => {
  return localStorage.getItem('token');
};