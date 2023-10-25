import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Stories() {
  const [section, setSection] = useState('arts'); // Default section
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/stories/${section}`, {
      headers: {
        'api-key': 'hAPxYFiWeIOMQQHXgDGbDubjwQn8lzMv', // Replace with your actual API key
      },
    })
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching stories', error);
      });
  }, [section]);

  return (
    <div className="stories-container">
      <div>
        <label htmlFor="section">Select a section: </label>
        <select
          id="section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="arts">Arts</option>
          <option value="automobiles">Automobiles</option>
          {/* Add more options for other sections as needed */}
        </select>
      </div>
      {stories.map((story) => (
        <a key={story.url} href={story.url} target="_blank" rel="noopener noreferrer" className="story-card">
          <img src={story.multimedia[0].url} alt={story.title} />
          <h3>{story.title}</h3>
          <p>{story.byline}</p>
        </a>
      ))}
    </div>
  );
}

export default Stories;
