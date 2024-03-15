import { useEffect, useState } from "react";
import { getTopics } from "./api";
import { Link } from "react-router-dom";
import TopicCard from "./TopicCard";

export default function Topics() {
  const [isLoading, setIsLoading] = useState(true);
  const [topicList, setTopicList] = useState([]);

  useEffect(()=> {
    setIsLoading(true)
    getTopics().then(({data: {topics}})=> {
        setTopicList(topics)
        setIsLoading(false)
    })
  }, [])

  return isLoading ? (
    <h1>Loading Topics</h1>
  ) : (
  <>
  <h1>Topics</h1>
  <ul className="topics-list">
    {topicList.map((topic) => {
        return <Link key={topic.slug} to={`/topics/${topic.slug}`}> <TopicCard  topic={topic} /></Link>
    })}
  </ul>
  </>
  )
}