import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fqa4.onrender.com/api",
});

export const getArticles = (topicname, sortBy, orderBy) => {
  const queries = {
    params: {
      topic: topicname,
      sort_by: sortBy,
      order: orderBy,
    },
  };
  return ncNewsApi.get("/articles", queries).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getArticleComments = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVote = (article_id, voteQty) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: voteQty })
    .then(
      ({
        data: {
          article: { votes },
        },
      }) => {
        return votes;
      }
    );
};

export const postCommentToArticle = (article_id, user, comment) => {
  return ncNewsApi.post(`/articles/${article_id}/comments`, {
    username: user,
    body: comment,
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`);
};
