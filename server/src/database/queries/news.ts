import pool from "../connection";

const NEWS_QUERIES = {
  getNews: () => pool.query("SELECT * FROM news"),

  getNewsById: (id: string) => pool.query(`SELECT * FROM news WHERE id=${id}`),

  addNews: (title: string, content: string, date: Date) => pool.query(`INSERT INTO news (title, content, date) VALUES ('${title}', '${content}', '${date}')`),
};

export default NEWS_QUERIES;
