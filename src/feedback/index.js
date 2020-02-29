import axios from 'axios';

require('dotenv').config();

export const restructureFeedback = feedback => {
  const feedbackArray = [];
  feedback.forEach(f => {
    feedbackArray.push(f.text);
  });
  return feedbackArray;
};

const gatherFeedback = option => {
  return axios
    .get(`${process.env.ENDPOINT}/${option}`)
    .then(response => {
      const { data } = response;
      const feedbackArray = restructureFeedback(data);
      return feedbackArray;
    })
    .catch(e => console.log(`error: ${e}`));
};

export const getUnreadFeedback = () => {
  return gatherFeedback('printunread').catch(e => console.log(`error: ${e}`));
};

export const getAllFeedback = () => {
  return gatherFeedback('printall').catch(e => console.log(`error: ${e}`));
};
