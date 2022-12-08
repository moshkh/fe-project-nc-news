import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../CSS/SortBy.css";

const SortBy = ({ setSortBy }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByFormat = {
    Author: "author",
    Title: "title",
    Topic: "topic",
    Date: "created_at",
    Votes: "votes",
    "Comment Count": "comment_count",
  };

  useEffect(() => {
    setSearchParams({ sort_by: "date" });
  }, []);

  const handleSortByChange = (event) => {
    setSearchParams({ sort_by: event.target.value });
    for (const key in sortByFormat) {
      if (key === event.target.value) {
        setSortBy(sortByFormat[key]);
      }
    }
  };

  return (
    <div className="sort_by">
      <label className="sort_by--label">Sort By:</label>
      <select className="sort_by--select" onChange={handleSortByChange}>
        <option className="sort_by--option">Date</option>
        <option className="sort_by--option">Author</option>
        <option className="sort_by--option">Title</option>
        <option className="sort_by--option">Topic</option>
        <option className="sort_by--option">Votes</option>
        <option className="sort_by--option">Comment Count</option>
      </select>
    </div>
  );
};

export default SortBy;